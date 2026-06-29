from fastapi import APIRouter
from app.schemas.review_schema import CodeReviewRequest

router = APIRouter()


@router.post("/review")
def review_code(request: CodeReviewRequest):
    return {
        "message": "Code received successfully",
        "language": request.language,
        "code": request.code
    }