from fastapi import FastAPI

import app.models

from app.db.database import Base, engine
from app.api.interaction_routes import router as interaction_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI CRM HCP",
    version="1.0.0",
)

app.include_router(interaction_router)


@app.get("/")
def root():
    return {
        "status": "running",
        "project": "AI CRM HCP",
    }