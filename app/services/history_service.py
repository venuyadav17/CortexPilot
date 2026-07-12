import json

from database.database import get_connection

from datetime import datetime

HISTORY_FILE = "storage/history.json"



def save_review(report):

    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute(

        """

        INSERT INTO reviews

        (timestamp, status, score, review)

        VALUES (?, ?, ?, ?)

        """,

        (

            datetime.now().isoformat(),

            report["status"],

            report["score"],

            json.dumps(report)

        )

    )

    connection.commit()

    connection.close()
    
    
def get_history():

    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute(

        "SELECT review FROM reviews ORDER BY id DESC"

    )

    rows = cursor.fetchall()

    connection.close()

    history = []

    for row in rows:

        history.append(

            json.loads(row[0])

        )

    return history