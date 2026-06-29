from fastapi import FastAPI
from app.routes.review import router as review_router

app = FastAPI(
    title="CortexPilot",
    description="AI-powered Code Review Copilot",
    version="1.0.0"
)


app.include_router(review_router)


@app.get("/")
def home():
    return {
        "message": "Welcome to CortexPilot!"
    }


@app.get("/health")
def health():
    return {
        "status": "OK"
    }