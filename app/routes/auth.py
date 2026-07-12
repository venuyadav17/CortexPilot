from fastapi import APIRouter

from app.schemas.user_schema import UserRegister
from app.services.user_service import register_user
from app.schemas.user_schema import UserLogin
from app.services.user_service import login_user


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/register")
def register(user: UserRegister):

    return register_user(
        user.username,
        user.email,
        user.password
    )
    
@router.post("/login")
def login(user: UserLogin):

    return login_user(
        user.email,
        user.password
    )