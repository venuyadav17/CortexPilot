from fastapi import APIRouter, UploadFile, File

from app.services.review_service import analyze_code


router = APIRouter()



@router.post("/upload")


async def upload_code_file(
    file: UploadFile = File(...)
):


    content = await file.read()


    code = content.decode(
        "utf-8"
    )


    result = analyze_code(
        code,
        "python"
    )


    return {

        "filename": file.filename,

        "review": result

    }