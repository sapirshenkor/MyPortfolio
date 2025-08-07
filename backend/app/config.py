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
    
    # CORS
    ALLOWED_ORIGINS: List[str] = [
        "http://localhost:3000",  # React.js dev
        "https://your-portfolio.vercel.app"  # my deployed frontend
    ]
    
    # Environment
    ENVIRONMENT: str = os.getenv("ENVIRONMENT", "development")
    class Config:
        env_file = ".env"

settings = Settings()