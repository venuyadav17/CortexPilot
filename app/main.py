from fastapi import FastAPI

app = FastAPI()


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