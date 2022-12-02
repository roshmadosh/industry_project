from fastapi import FastAPI, Response
from pydantic import BaseModel
from .graph import bell_curve_salary_to_rent_plot
from PIL import Image
import io
  
# open method used to open different extension image file


app = FastAPI()

# define params and param types here for model
class Item(BaseModel):
    salary_to_rent_ratio: float

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/data/", responses = { 200: { "content": {"image/png": {}}}}, response_class=Response)
async def predict(item: Item):

    bell_curve_salary_to_rent_plot(item.salary_to_rent_ratio)
    image = Image.open(r"testplot.png") 
    byteIO = io.BytesIO()
    image.save(byteIO, format='PNG')
    byteArr = byteIO.getvalue()
    return Response(content=byteArr, media_type="image/png")


