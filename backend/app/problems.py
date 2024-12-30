from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import schemas, models, crud
from app.database import get_db
from app.auth import get_current_user

router = APIRouter(
    prefix="/problems",
    tags=["problems"],
    dependencies=[Depends(get_current_user)],
    responses={404: {"description": "Not found"}},
)

@router.post("/", response_model=schemas.Problem)
def submit_problem(problem: schemas.ProblemCreate, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    return crud.create_problem(db=db, problem=problem, user_id=current_user.id)

@router.get("/", response_model=list[schemas.Problem])
def get_problems(db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    return db.query(models.Problem).filter(models.Problem.user_id == current_user.id).all()