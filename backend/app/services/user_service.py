from app.repositories.user_repository import UserRepository


class UserService:
    def __init__(self, repo: UserRepository):
        self.repo = repo

    def get_all(self):
        return self.repo.get_all()

    def get_by_id(self, user_id: int):
        return self.repo.get_by_id(user_id)

    def create(self, data: dict):
        existing_user = self.repo.get_by_email(data["email"])

        if existing_user:
            raise ValueError("User with this email already exists.")

        return self.repo.create(data)

    def update(self, user, data: dict):
        return self.repo.update(user, data)

    def delete(self, user):
        self.repo.delete(user)