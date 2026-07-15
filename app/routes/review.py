from fastapi import APIRouter, Depends

from app.schemas.review_schema import CodeReviewRequest
from app.services.review_service import analyze_code
from app.services.auth_service import get_current_user

router = APIRouter(tags=["Review"])


@router.post("/review")
def review_code(
    request: CodeReviewRequest,
    current_user: str = Depends(get_current_user)
):

    return analyze_code(
        request.language,
        request.code,
        current_user
    )