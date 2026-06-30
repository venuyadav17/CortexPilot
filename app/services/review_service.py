def analyze_code(code: str, language: str):
    total_lines = len(code.splitlines())

    blank_lines = sum(
        1 for line in code.splitlines()
        if line.strip() == ""
    )

    characters = len(code)

    contains_print = "print(" in code

    return {
        "language": language,
        "total_lines": total_lines,
        "blank_lines": blank_lines,
        "characters": characters,
        "contains_print": contains_print,
        "analysis": "Basic analysis completed successfully."
    }