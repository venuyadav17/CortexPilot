import sqlite3

DATABASE_NAME = "database/reviews.db"


def get_connection():
    connection = sqlite3.connect(DATABASE_NAME)
    return connection


def create_table():

    connection = get_connection()

    cursor = connection.cursor()

    # Reviews Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS reviews (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            timestamp TEXT,

            status TEXT,

            score INTEGER,

            review TEXT

        )
    """)

    # Users Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            username TEXT NOT NULL,

            email TEXT UNIQUE NOT NULL,

            password TEXT NOT NULL

        )
    """)

    connection.commit()

    connection.close()