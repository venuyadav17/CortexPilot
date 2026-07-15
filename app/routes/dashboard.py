from fastapi import APIRouter, Depends

from app.services.auth_service import get_current_user
from app.services.dashboard_service import get_dashboard

router = APIRouter(
    tags=["Dashboard"]
)


@router.get("/dashboard")
def dashboard(
    current_user: str = Depends(get_current_user)
):

    return get_dashboard(current_user)