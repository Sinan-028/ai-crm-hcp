from sqlalchemy.orm import Session

from app.models.hcp import HCP


class HCPRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all(self):
        return self.db.query(HCP).all()

    def get_by_id(self, hcp_id: int):
        return (
            self.db.query(HCP)
            .filter(HCP.id == hcp_id)
            .first()
        )

    def search(self, name: str):
        return (
            self.db.query(HCP)
            .filter(HCP.name.ilike(f"%{name}%"))
            .all()
        )

    def create(self, data: dict):
        hcp = HCP(**data)

        self.db.add(hcp)
        self.db.commit()
        self.db.refresh(hcp)

        return hcp

    def update(self, hcp, data: dict):
        for key, value in data.items():
            setattr(hcp, key, value)

        self.db.commit()
        self.db.refresh(hcp)

        return hcp

    def delete(self, hcp):
        self.db.delete(hcp)
        self.db.commit()