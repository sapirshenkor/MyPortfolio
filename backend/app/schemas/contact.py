from datetime import datetime
from pydantic import BaseModel, EmailStr, Field,field_validator
from typing import Optional
import re

class ContactBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=100, description="Contact's name")
    message: str = Field(..., min_length=1, max_length=2000, description="Contact's message")
    email: str= Field(..., description="Contact's email")
    @field_validator('email')
    @classmethod
    def validate_email(cls, v):
        # Simple email regex validation
        email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(email_regex, v):
            raise ValueError('Invalid email format')
        return v.lower()

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