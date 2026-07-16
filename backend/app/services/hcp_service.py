from app.repositories.hcp_repository import HCPRepository


class HCPService:

    def __init__(self, repo: HCPRepository):
        self.repo = repo

    def get_all(self):
        return self.repo.get_all()

    def create(self, data: dict):
        return self.repo.create(data)