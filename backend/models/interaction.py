from sqlalchemy import Column, Integer, String, Text, Date, DateTime
from datetime import datetime

from database.base import Base


class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)

    doctor_name = Column(String(100), nullable=False)

    hospital = Column(String(150), nullable=False)

    interaction_type = Column(String(50), nullable=False)

    notes = Column(Text, nullable=False)

    summary = Column(Text)

    follow_up_date = Column(Date)

    created_at = Column(DateTime, default=datetime.utcnow)