import json

from database.database import get_connection
from app.services.user_service import get_user_by_email


def get_dashboard(email):

    user = get_user_by_email(email)

    if user is None:
        return {}

    user_id = user[0]

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        """
        SELECT review
        FROM reviews
        WHERE user_id=?
        ORDER BY id
        """,
        (user_id,)
    )

    rows = cursor.fetchall()

    connection.close()

    reviews = [json.loads(row[0]) for row in rows]

    total_reviews = len(reviews)

    if total_reviews == 0:

        return {

            "overview": {
                "total_reviews": 0,
                "average_score": 0,
                "good_reviews": 0,
                "needs_improvement": 0,
                "poor_reviews": 0,
                "best_score": 0,
                "lowest_score": 0,
                "last_review": None
            },

            "most_common_issue": None,

            "issue_statistics": {},

            "severity_statistics": {},

            "score_history": [],

            "recent_reviews": []

        }

    average_score = round(
        sum(review["score"] for review in reviews) / total_reviews,
        2
    )

    scores = [review["score"] for review in reviews]

    best_score = max(scores)

    lowest_score = min(scores)

    good_reviews = sum(
        1
        for review in reviews
        if review["status"] == "Good"
    )

    needs_improvement = sum(
        1
        for review in reviews
        if review["status"] == "Needs Improvement"
    )

    poor_reviews = sum(
        1
        for review in reviews
        if review["status"] == "Poor"
    )

    issue_counter = {}

    severity_counter = {}

    for review in reviews:

        for issue in review["issues"]:

            rule = issue["rule"]

            severity = issue["severity"]

            issue_counter[rule] = issue_counter.get(rule, 0) + 1

            severity_counter[severity] = severity_counter.get(severity, 0) + 1

    most_common_issue = None

    if issue_counter:

        most_common_issue = max(
            issue_counter,
            key=issue_counter.get
        )

    last_review = reviews[-1]["timestamp"]

    score_history = []

    for review in reviews:

        score_history.append(
            {
                "timestamp": review["timestamp"],
                "score": review["score"]
            }
        )

    recent_reviews = []

    for review in reviews[-5:]:

        recent_reviews.append(
            {
                "timestamp": review["timestamp"],
                "status": review["status"],
                "score": review["score"]
            }
        )

    return {

        "overview": {

            "total_reviews": total_reviews,

            "average_score": average_score,

            "good_reviews": good_reviews,

            "needs_improvement": needs_improvement,

            "poor_reviews": poor_reviews,

            "best_score": best_score,

            "lowest_score": lowest_score,

            "last_review": last_review

        },

        "most_common_issue": most_common_issue,

        "issue_statistics": issue_counter,

        "severity_statistics": severity_counter,

        "score_history": score_history,

        "recent_reviews": recent_reviews

    }