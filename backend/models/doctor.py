from sqlalchemy import Column, Integer, String
from app.database.base import Base


class Doctor(Base):
    __tablename__ = "doctors"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    hospital = Column(String)
    specialization = Column(String)