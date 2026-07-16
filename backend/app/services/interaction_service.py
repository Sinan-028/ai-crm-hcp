from sqlalchemy.orm import Session

from app.repositories.interaction_repository import InteractionRepository


class InteractionService:

    def __init__(self, db: Session):

        self.repo = InteractionRepository(db)

    def create(self, data):

        return self.repo.create(data)

    def get_all(self):

        return self.repo.get_all()

    def get(self, interaction_id):

        return self.repo.get_by_id(interaction_id)

    def update(
        self,
        interaction_id,
        data,
    ):

        interaction = self.repo.get_by_id(interaction_id)

        if not interaction:
            return None

        return self.repo.update(
            interaction,
            data,
        )