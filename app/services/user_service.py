from database.database import get_connection
from app.services.security_service import hash_password
from app.services.security_service import verify_password
from app.services.jwt_service import create_access_token


def register_user(username, email, password):

    connection = get_connection()
    cursor = connection.cursor()

    hashed_password = hash_password(password)

    try:
        cursor.execute(
            """
            INSERT INTO users
            (username, email, password)
            VALUES (?, ?, ?)
            """,
            (
                username,
                email,
                hashed_password
            )
        )

        connection.commit()

        return {
            "message": "User registered successfully."
        }

    except Exception:
        return {
            "message": "Email already exists."
        }

    finally:
        connection.close()


def login_user(email, password):

    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute(
        """
        SELECT email, password
        FROM users
        WHERE email=?
        """,
        (email,)
    )

    user = cursor.fetchone()

    connection.close()

    if user is None:

        return {
            "message": "Invalid email or password."
        }

    stored_email = user[0]
    stored_password = user[1]

    if not verify_password(
        password,
        stored_password
    ):

        return {
            "message": "Invalid email or password."
        }

    token = create_access_token(
        {
            "sub": stored_email
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }


def get_user_by_email(email):

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        """
        SELECT id, username, email
        FROM users
        WHERE email=?
        """,
        (email,)
    )

    user = cursor.fetchone()

    connection.close()

    return user