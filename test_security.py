from app.services.security_service import hash_password
from app.services.security_service import verify_password

password = "venu123"

hashed = hash_password(password)

print("Original Password :", password)
print("Hashed Password   :", hashed)

print()

print(
    "Correct Password :",
    verify_password("venu123", hashed)
)

print(
    "Wrong Password   :",
    verify_password("hello123", hashed)
)