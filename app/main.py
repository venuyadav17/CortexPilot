from fastapi import FastAPI

from app.routes.review import router as review_router
from app.routes.history import router as history_router
from app.routes.upload import router as upload_router
from app.routes.auth import router as auth_router
from app.routes.dashboard import router as dashboard_router
from app.routes.export import router as export_router

from database.session import engine
from database.models import Base

# Create PostgreSQL tables automatically
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="CortexPilot",
    description="AI-powered Code Review Copilot",
    version="1.0.0"
)

app.include_router(review_router)
app.include_router(history_router)
app.include_router(upload_router)
app.include_router(auth_router)
app.include_router(dashboard_router)
app.include_router(export_router)


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