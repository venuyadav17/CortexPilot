import sqlite3

DATABASE_NAME = "database/reviews.db"


def get_connection():
    connection = sqlite3.connect(DATABASE_NAME)
    return connection


def create_table():
    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS reviews (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            timestamp TEXT,

            status TEXT,

            score INTEGER,

            review TEXT

        )
    """)

    connection.commit()
    connection.close()