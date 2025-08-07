from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from .config import settings

#create database engine
engine = create_engine(settings.DATABASE_URL, pool_pre_ping=True,echo=settings.DEBUG) # Verify connections before use and Log SQL queries in debug mode

#create session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

#create base class for models
Base = declarative_base()

#create dependency to get database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()