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