from sqlalchemy.orm import Session

from app.models.interaction import Interaction
from app.schemas.interaction import InteractionCreate


def create_interaction(db: Session, data: InteractionCreate):
    interaction = Interaction(**data.model_dump())

    db.add(interaction)
    db.commit()
    db.refresh(interaction)

    return interaction


def get_interactions(db: Session):
    return db.query(Interaction).all()