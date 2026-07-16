from sqlalchemy.orm import Session

from app.models.user import User


class UserRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all(self):
        return self.db.query(User).all()

    def get_by_id(self, user_id: int):
        return (
            self.db.query(User)
            .filter(User.id == user_id)
            .first()
        )

    def get_by_email(self, email: str):
        return (
            self.db.query(User)
            .filter(User.email == email)
            .first()
        )

    def create(self, data: dict):
        user = User(**data)

        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)

        return user

    def update(self, user, data: dict):
        for key, value in data.items():
            setattr(user, key, value)

        self.db.commit()
        self.db.refresh(user)

        return user

    def delete(self, user):
        self.db.delete(user)
        self.db.commit()