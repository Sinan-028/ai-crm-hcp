from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db

from app.schemas.hcp import HCPCreate
from app.schemas.hcp import HCPResponse

from app.repositories.hcp_repository import HCPRepository
from app.services.hcp_service import HCPService

router = APIRouter(
    prefix="/api/hcps",
    tags=["HCPs"],
)


@router.get("/", response_model=list[HCPResponse])
def get_hcps(db: Session = Depends(get_db)):
    repo = HCPRepository(db)
    service = HCPService(repo)

    return service.get_all()


@router.post("/", response_model=HCPResponse)
def create_hcp(
    hcp: HCPCreate,
    db: Session = Depends(get_db),
):
    repo = HCPRepository(db)
    service = HCPService(repo)

    return service.create(hcp.model_dump())