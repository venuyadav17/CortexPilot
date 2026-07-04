from app.review_rules.python_rules import (
    check_todo,
    check_print,
    check_password,
    check_empty_code,
    check_long_lines,
    check_api_key
)
from app.utils.report_generator import generate_report

def analyze_code(code: str, language: str):

    lines = code.splitlines()

    issues = []


    rule_results = [
        check_empty_code(code),
        check_todo(code),
        check_print(code),
        check_password(code),
        check_api_key(code)
    ]


    for result in rule_results:

        if result:
            issues.append(result)


    issues.extend(
        check_long_lines(code)
    )


    summary = {

    "language": language,

    "total_lines": len(lines),

    "blank_lines": sum(
        1 for line in lines
        if line.strip()==""
    ),

    "characters": len(code)

    }


    return generate_report(
        summary,
        issues
    )