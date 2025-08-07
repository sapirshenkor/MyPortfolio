from datetime import datetime
from pydantic import BaseModel, EmailStr, Field
from typing import Optional

class ContactBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=100, description="Contact's name")
    email: EmailStr= Field(..., description="Contact's email")
    message: str = Field(..., min_length=1, max_length=2000, description="Contact's message")

class ContactCreate(ContactBase):
    """schema for creating a new contact submission"""
    pass

class ContactResponse(ContactBase):
    """schema for contact submission response (what the api returns)"""
    id: int
    read: bool
    created_at: datetime

    class Config:
        from_attributes = True

class ContactUpdate(BaseModel):
    """schema for updating a contact submission (mark as read)"""
    read: Optional[bool] = False