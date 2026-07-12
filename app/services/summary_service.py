def generate_summary(issues):

    summary = []

    for issue in issues:

        summary.append({

            "severity": issue["severity"],

            "title": issue["rule"].replace("_", " ").title(),

            "summary": issue["suggestion"]

        })

    return summary