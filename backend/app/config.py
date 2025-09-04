import os
from typing import List
from pydantic_settings import BaseSettings
from dotenv import load_dotenv

load_dotenv()

class Settings(BaseSettings):
    # API Settings
    PROJECT_NAME: str = "Portfolio"
    API_V1_STR: str = "/api"
    DEBUG: bool = True
    
    # Database
    DATABASE_URL: str = os.getenv("DATABASE_URL", "postgresql://user:pass@localhost/portfolio")
    if DATABASE_URL.startswith("postgres://"):
        DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql+psycopg2://", 1)
    
    # CORS
    ALLOWED_ORIGINS: List[str] = [
        "http://localhost:3000",      # Local development
    "http://127.0.0.1:3000",    # Local development
    "https://sapir-shenkor-fullstack-software-engineer.vercel.app",           # Your Vercel URL
    "https://*.vercel.app",    # All Vercel preview deployments
    ]
    
    # Environment
    ENVIRONMENT: str = os.getenv("ENVIRONMENT", "development")
    class Config:
        env_file = ".env"

settings = Settings()