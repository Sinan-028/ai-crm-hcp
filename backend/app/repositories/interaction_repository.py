from sqlalchemy.orm import Session

from app.models.interaction import Interaction


class InteractionRepository:

    def __init__(self, db: Session):
        self.db = db

    def get_all(self):
        return self.db.query(Interaction).all()

    def get_by_id(self, interaction_id: int):
        return (
            self.db.query(Interaction)
            .filter(Interaction.id == interaction_id)
            .first()
        )

    def create(self, data: dict):
        interaction = Interaction(**data)

        self.db.add(interaction)
        self.db.commit()
        self.db.refresh(interaction)

        return interaction

    def update(self, interaction, data: dict):
        for key, value in data.items():
            setattr(interaction, key, value)

        self.db.commit()
        self.db.refresh(interaction)

        return interaction

    def delete(self, interaction):
        self.db.delete(interaction)
        self.db.commit()