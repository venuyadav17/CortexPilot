def calculate_score(issues):

    score = 100


    for issue in issues:

        severity = issue.get("severity")


        if severity == "Critical":
            score -= 30

        elif severity == "Warning":
            score -= 15

        elif severity == "Info":
            score -= 5


    return max(score, 0)



def generate_report(summary, issues):

    score = calculate_score(issues)


    if score >= 80:

        status = "Good"

    elif score >= 50:

        status = "Needs Improvement"

    else:

        status = "Poor"


    return {

        "status": status,

        "score": score,

        "total_issues": len(issues),

        "summary": summary,

        "issues": issues
    }