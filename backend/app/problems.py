from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .database import SessionLocal
from .models import Problem, User
from .schemas import ProblemCreate
from .auth import get_db, get_current_user

router = APIRouter()

@router.post("/problems")
def create_problem(problem: ProblemCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    db_problem = Problem(user_id=current_user.id, problem_text=problem.problem_text, known_answer=problem.known_answer)
    db.add(db_problem)
    db.commit()
    db.refresh(db_problem)
    return db_problem