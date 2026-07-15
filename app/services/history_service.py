import json

from database.database import get_connection
from app.services.user_service import get_user_by_email


def save_review(email, report):

    user = get_user_by_email(email)

    if user is None:
        return

    user_id = user[0]

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        """
        INSERT INTO reviews
        (user_id, timestamp, status, score, review)

        VALUES (?, ?, ?, ?, ?)
        """,
        (
            user_id,
            report["timestamp"],
            report["status"],
            report["score"],
            json.dumps(report)
        )
    )

    connection.commit()
    connection.close()


def get_history(email):

    user = get_user_by_email(email)

    if user is None:
        return []

    user_id = user[0]

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        """
        SELECT timestamp, review
        FROM reviews
        WHERE user_id=?
        ORDER BY id DESC
        """,
        (user_id,)
    )

    rows = cursor.fetchall()

    connection.close()

    history = []

    for row in rows:

        history.append(
            {
                "timestamp": row[0],
                "review": json.loads(row[1])
            }
        )

    return history