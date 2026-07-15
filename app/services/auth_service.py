# from fastapi import Depends, HTTPException
# from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

# from app.services.jwt_service import verify_access_token

# security = HTTPBearer()


# def get_current_user(
#     credentials: HTTPAuthorizationCredentials = Depends(security)
# ):
#     token = credentials.credentials

#     email = verify_access_token(token)

#     if email is None:
#         raise HTTPException(
#             status_code=401,
#             detail="Invalid or expired token."
#         )

#     return email



from fastapi import Depends, HTTPException
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from app.services.jwt_service import verify_access_token

security = HTTPBearer()


def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security)
):

    print("Credentials:", credentials)
    print("Token:", credentials.credentials)

    email = verify_access_token(credentials.credentials)

    print("Decoded Email:", email)

    if email is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid or expired token."
        )

    return email