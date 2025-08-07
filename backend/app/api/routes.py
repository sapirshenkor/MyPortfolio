from fastapi import APIRouter, Depends, HTTPException, status, Request
from sqlalchemy.orm import Session
from slowapi import Limiter
from slowapi.util import get_remote_address
from typing import List

from ..database import get_db
from ..models.contact import Contact
from ..schemas.contact import ContactCreate, ContactResponse
from ..schemas.project import ProjectResponse, ProjectList
from ..core.myProjects import PROJECTS, SKILLS

limiter = Limiter(key_func=get_remote_address)
router = APIRouter()

#-----------------------Projects endpoints----------------------------
@router.get("/projects", response_model=ProjectList)
async def get_projects():
    """Get all projects"""
    return ProjectList(
        projects=[ProjectResponse(**project) for project in PROJECTS],
        total=len(PROJECTS)        
    )

@router.get("/project/{project_id}", response_model=ProjectResponse)
async def get_project(project_id: int):
    """Get a specific project by id"""
    project = next((project for project in PROJECTS if project["id"] == project_id), None)
    if project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    return ProjectResponse(**project)

@router.get("/projects/featured", response_model=ProjectList)
async def get_featured_projects():
    """Get only featured projects"""
    featured_projects = [project for project in PROJECTS if project["featured"]]
    return ProjectList(
        projects=[ProjectResponse(**project) for project in featured_projects],
        total=len(featured_projects)
    )
    

#-----------------------Skills endpoints----------------------------
@router.get("/skills")
async def get_skills():
    """Get all skills"""
    return {"skills": SKILLS}


#-----------------------Contact endpoints----------------------------
@router.post("/contact", response_model=ContactResponse)
@limiter.limit("5/minute") #limit to 5 submissions per minute
async def create_contact(contact: ContactCreate, db: Session = Depends(get_db), request: Request):
    """Create a new contact submission"""
    try:
        db_contact = Contact(
            name=contact.name,
            email=contact.email,
            message=contact.message,
        )
        db.add(db_contact)
        db.commit()
        db.refresh(db_contact)
        return ContactResponse.from_orm(db_contact)
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="failed to create contact submission")
        


 
    
