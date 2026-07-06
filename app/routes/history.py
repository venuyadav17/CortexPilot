from fastapi import APIRouter

from app.services.history_service import get_history


router = APIRouter()


@router.get("/history")
def review_history():


    history = get_history()


    return {
        "total_reviews": len(history),

        "reviews": history
    }