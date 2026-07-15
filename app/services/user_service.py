from sqlalchemy.orm import Session

from database.models import User
from database.session import SessionLocal

from app.services.security_service import (
    hash_password,
    verify_password
)

from app.services.jwt_service import (
    create_access_token
)


def register_user(username, email, password):

    db: Session = SessionLocal()

    try:

        existing = db.query(User).filter(
            User.email == email
        ).first()

        if existing:

            return {
                "message": "Email already exists."
            }

        new_user = User(
            username=username,
            email=email,
            password=hash_password(password)
        )

        db.add(new_user)

        db.commit()

        return {
            "message": "User registered successfully."
        }

    finally:

        db.close()


def login_user(email, password):

    db: Session = SessionLocal()

    try:

        user = db.query(User).filter(
            User.email == email
        ).first()

        if user is None:

            return {
                "message": "Invalid email or password."
            }

        if not verify_password(
            password,
            user.password
        ):

            return {
                "message": "Invalid email or password."
            }

        token = create_access_token(
            {
                "sub": user.email
            }
        )

        return {

            "access_token": token,

            "token_type": "bearer"

        }

    finally:

        db.close()
        
from database.session import SessionLocal
from database.models import User


def get_user_by_email(email):

    db = SessionLocal()

    try:
        return db.query(User).filter(
            User.email == email
        ).first()

    finally:
        db.close()