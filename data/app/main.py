from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# define params and param types here for model
class Item(BaseModel):
    id: int
    name: str

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/data/")
async def predict(item: Item):
    # add data scienc-y stuff here
    return item
