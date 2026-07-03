def check_todo(code):

    if "TODO" in code:
        return {
            "rule": "TODO_COMMENT",
            "severity": "Info",
            "message": "TODO comment found.",
            "suggestion": "Complete or remove the TODO."
        }

    return None

def check_print(code):

    if "print(" in code:

        return {
            "rule":"DEBUG_PRINT",
            "severity":"Info",
            "message":"Debug print statement found.",
            "suggestion":"Remove debug statements before production."
        }

    return None

def check_password(code):

    if "password" in code.lower():

        return {
            "rule":"HARDCODED_PASSWORD",
            "severity":"Warning",
            "message":"Possible hardcoded password detected.",
            "suggestion":"Store passwords securely."
        }
        
    return None

def check_empty_code(code):

    if len(code.strip()) == 0:

        return {
            "rule": "EMPTY_CODE",
            "severity": "Error",
            "message": "No code provided.",
            "suggestion": "Provide valid source code for review."
        }

    return None

def check_long_lines(code):

    issues = []

    lines = code.splitlines()


    for index, line in enumerate(lines, start=1):

        if len(line) > 80:

            issues.append(
                {
                    "rule": "LONG_LINE",
                    "severity": "Warning",
                    "line": index,
                    "message": "Line exceeds 80 characters.",
                    "suggestion": "Break long lines for better readability."
                }
            )


    return issues


def check_api_key(code):

    keywords = [
        "api_key",
        "apikey",
        "secret_key",
        "token"
    ]


    for key in keywords:

        if key in code.lower():

            return {
                "rule": "HARDCODED_SECRET",
                "severity": "Critical",
                "message": "Possible secret key detected.",
                "suggestion": "Move secrets into environment variables."
            }


    return None