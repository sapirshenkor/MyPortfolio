from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean
from ..database import Base
from sqlalchemy.sql import func

class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    message = Column(Text,nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    read = Column(Boolean, default=False,nullable=False)

    def __repr__(self):
        return f"<Contact(name={self.name}, email={self.email}, message={self.message})>"
        