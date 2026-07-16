from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.db.database import Base


class HCP(Base):
    __tablename__ = "hcps"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(150), nullable=False)

    specialty = Column(String(100), nullable=True)

    hospital = Column(String(150), nullable=True)

    city = Column(String(100), nullable=True)