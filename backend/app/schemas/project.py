from pydantic import BaseModel,HttpUrl
from typing import List, Optional

class ProjectBase(BaseModel):
    id: int
    title: str
    description: str
    tech_stack: List[str]
    image_url: str
    github_url: Optional[HttpUrl] = None
    live_url: Optional[HttpUrl]= None
    featured: bool = False

class ProjectResponse(ProjectBase):
    """schema for project response (what the api returns)"""
    pass

class ProjectList(BaseModel):
    """schema for list of projects"""
    projects: List[ProjectResponse]
    total: int


    