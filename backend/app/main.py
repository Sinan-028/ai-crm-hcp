from fastapi import FastAPI

import app.models

from app.api.interaction_routes import router as interaction_router
from app.api.routes.ai import router as ai_router
from app.db.database import Base, engine
from app.api.hcp_routes import router as hcp_router
from app.api.user_routes import router as user_router
from fastapi.middleware.cors import CORSMiddleware

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI CRM HCP",
    version="1.0.0",
    description="AI-powered CRM for Healthcare Professionals",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routes
app.include_router(interaction_router)
app.include_router(ai_router)
app.include_router(hcp_router)
app.include_router(user_router)

@app.get("/")
def root():
    return {
        "status": "running",
        "project": "AI CRM HCP",
        "version": "1.0.0",
    }