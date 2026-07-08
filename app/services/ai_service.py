import os

from google import genai
from dotenv import load_dotenv


load_dotenv()


client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def get_ai_review(
        code,
        issues,
        context
):

    prompt = f"""

You are an expert software engineer performing code review.

Review this code:

{code}


Our static analyzer found these issues:

{issues}

Company coding guidelines:

{context}


Provide:
1. Explanation of problems
2. Why they matter
3. Recommended fixes
4. Best practices

Keep it simple and practical.

"""


    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )


    return response.text