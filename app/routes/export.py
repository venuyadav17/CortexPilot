from fastapi import APIRouter, Depends
from fastapi.responses import FileResponse

from app.services.auth_service import get_current_user
from app.services.export_service import export_pdf, export_csv

router = APIRouter(
    prefix="/export",
    tags=["Export"]
)


@router.get("/pdf")
def download_pdf(
    current_user: str = Depends(get_current_user)
):

    filepath = export_pdf(current_user)

    return FileResponse(
        filepath,
        media_type="application/pdf",
        filename="review_report.pdf"
    )


@router.get("/csv")
def download_csv(
    current_user: str = Depends(get_current_user)
):

    filepath = export_csv(current_user)

    return FileResponse(
        filepath,
        media_type="text/csv",
        filename="review_history.csv"
    )