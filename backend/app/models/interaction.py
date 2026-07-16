from sqlalchemy import Column
from sqlalchemy import DateTime
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy.sql import func

from app.db.database import Base


class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)

    hcp_id = Column(Integer, ForeignKey("hcps.id"))
    user_id = Column(Integer, ForeignKey("users.id"))

    interaction_type = Column(String(100))
    summary = Column(Text)
    sentiment = Column(String(30))
    follow_up = Column(Text)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )