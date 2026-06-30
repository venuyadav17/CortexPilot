from fastapi import APIRouter
from app.schemas.review_schema import CodeReviewRequest
from app.services.review_service import analyze_code

router = APIRouter()


@router.post("/review")
def review_code(request: CodeReviewRequest):

    result = analyze_code(
        request.code,
        request.language
    )

    return result