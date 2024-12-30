from pydantic import BaseModel

class UserCreate(BaseModel):
    username: str
    password: str

class UserLogin(BaseModel):
    username: str
    password: str

class ProblemCreate(BaseModel):
    problem_text: str
    known_answer: str

class TokenData(BaseModel):
    username: str | None = None
