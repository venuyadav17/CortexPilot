def analyze_code(code: str, language: str):

    lines = code.splitlines()

    issues = []

    total_lines = len(lines)

    blank_lines = sum(
        1 for line in lines
        if line.strip() == ""
    )

    characters = len(code)

    if "TODO" in code:
        issues.append({
            "severity": "Info",
            "message": "TODO comment found."
        })

    if "print(" in code:
        issues.append({
            "severity": "Info",
            "message": "print() statement found."
        })

    if "password" in code.lower():
        issues.append({
            "severity": "Warning",
            "message": "Possible hardcoded password detected."
        })

    for line in lines:
        if len(line) > 80:
            issues.append({
                "severity": "Warning",
                "message": "Line exceeds 80 characters."
            })
            break

    return {
        "language": language,
        "summary": {
            "total_lines": total_lines,
            "blank_lines": blank_lines,
            "characters": characters
        },
        "issues": issues
    }