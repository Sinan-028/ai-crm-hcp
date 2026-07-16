from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.repositories.user_repository import UserRepository
from app.schemas.user import UserCreate, UserResponse
from app.services.user_service import UserService

router = APIRouter(
    prefix="/api/users",
    tags=["Users"],
)


@router.get("/", response_model=list[UserResponse])
def get_users(db: Session = Depends(get_db)):
    repo = UserRepository(db)
    service = UserService(repo)

    return service.get_all()


@router.post("/", response_model=UserResponse)
def create_user(
    user: UserCreate,
    db: Session = Depends(get_db),
):
    repo = UserRepository(db)
    service = UserService(repo)

    try:
        return service.create(user.model_dump())
    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e),
        )