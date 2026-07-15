import json
import pandas as pd

from reportlab.platypus import SimpleDocTemplate, Table
from sqlalchemy.orm import Session

from database.session import SessionLocal
from database.models import Review

from app.services.user_service import get_user_by_email


def export_csv(email):

    user = get_user_by_email(email)

    if user is None:
        return None

    db: Session = SessionLocal()

    try:

        rows = (
            db.query(Review)
            .filter(
                Review.user_id == user.id
            )
            .order_by(
                Review.id.desc()
            )
            .all()
        )

        data = []

        for row in rows:

            review = json.loads(row.review)

            data.append({

                "Timestamp": review["timestamp"],

                "Status": review["status"],

                "Score": review["score"],

                "Issues": len(review["issues"])

            })

    finally:

        db.close()

    df = pd.DataFrame(data)

    filepath = "exports/review_history.csv"

    df.to_csv(filepath, index=False)

    return filepath


def export_pdf(email):

    user = get_user_by_email(email)

    if user is None:
        return None

    db: Session = SessionLocal()

    try:

        rows = (
            db.query(Review)
            .filter(
                Review.user_id == user.id
            )
            .order_by(
                Review.id.desc()
            )
            .all()
        )

        table_data = [

            [

                "Timestamp",

                "Status",

                "Score",

                "Issues"

            ]

        ]

        for row in rows:

            review = json.loads(row.review)

            table_data.append(

                [

                    review["timestamp"],

                    review["status"],

                    review["score"],

                    len(review["issues"])

                ]

            )

    finally:

        db.close()

    filepath = "exports/review_report.pdf"

    pdf = SimpleDocTemplate(filepath)

    table = Table(table_data)

    pdf.build([table])

    return filepath