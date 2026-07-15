from fastapi import APIRouter, Depends

from app.services.history_service import get_history
from app.services.auth_service import get_current_user

router = APIRouter(
    tags=["History"]
)


@router.get("/history")
def history(
    current_user: str = Depends(get_current_user)
):

    reviews = get_history(current_user)

    return {
        "total_reviews": len(reviews),
        "reviews": reviews
    }