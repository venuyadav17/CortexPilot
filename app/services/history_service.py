import json
from datetime import datetime

from sqlalchemy.orm import Session

from database.session import SessionLocal
from database.models import Review

from app.services.user_service import get_user_by_email


def save_review(email, report):

    db: Session = SessionLocal()

    try:

        user = get_user_by_email(email)

        if user is None:
            return

        review = Review(

            user_id=user.id,

            timestamp=datetime.now().isoformat(),

            status=report["status"],

            score=report["score"],

            review=json.dumps(report)

        )

        db.add(review)

        db.commit()

    finally:

        db.close()


def get_history(email):

    db: Session = SessionLocal()

    try:

        user = get_user_by_email(email)

        if user is None:
            return []

        reviews = (

            db.query(Review)

            .filter(

                Review.user_id == user.id

            )

            .order_by(

                Review.id.desc()

            )

            .all()

        )

        history = []

        for review in reviews:

            history.append(

                {

                    "timestamp": review.timestamp,

                    "review": json.loads(

                        review.review

                    )

                }

            )

        return history

    finally:

        db.close()