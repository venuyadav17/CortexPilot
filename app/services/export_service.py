import json
import pandas as pd

from reportlab.platypus import SimpleDocTemplate, Table
from database.database import get_connection
from app.services.user_service import get_user_by_email


def export_csv(email):

    user = get_user_by_email(email)

    if user is None:
        return None

    user_id = user[0]

    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute(
        """
        SELECT review
        FROM reviews
        WHERE user_id=?
        ORDER BY id DESC
        """,
        (user_id,)
    )

    rows = cursor.fetchall()

    connection.close()

    data = []

    for row in rows:

        review = json.loads(row[0])

        data.append({

            "Timestamp": review["timestamp"],

            "Status": review["status"],

            "Score": review["score"],

            "Issues": len(review["issues"])

        })

    df = pd.DataFrame(data)

    filepath = "exports/review_history.csv"

    df.to_csv(filepath, index=False)

    return filepath


def export_pdf(email):

    user = get_user_by_email(email)

    if user is None:
        return None

    user_id = user[0]

    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute(
        """
        SELECT review
        FROM reviews
        WHERE user_id=?
        ORDER BY id DESC
        """,
        (user_id,)
    )

    rows = cursor.fetchall()

    connection.close()

    table_data = [

        [

            "Timestamp",

            "Status",

            "Score",

            "Issues"

        ]

    ]

    for row in rows:

        review = json.loads(row[0])

        table_data.append(

            [

                review["timestamp"],

                review["status"],

                review["score"],

                len(review["issues"])

            ]

        )

    filepath = "exports/review_report.pdf"

    pdf = SimpleDocTemplate(filepath)

    table = Table(table_data)

    pdf.build([table])

    return filepath