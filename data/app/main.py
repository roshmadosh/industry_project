from fastapi import FastAPI, Response
from pydantic import BaseModel
from .graph import bell_curve_salary_to_rent_plot
from PIL import Image
import io
  
# open method used to open different extension image file


app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/data/{ratio}", responses = { 200: { "content": {"image/png": {}}}}, response_class=Response)
async def predict(ratio):

    bell_curve_salary_to_rent_plot(float(ratio))
    image = Image.open(r"testplot.png") 
    byteIO = io.BytesIO()
    image.save(byteIO, format='PNG')
    byteArr = byteIO.getvalue()
    return Response(content=byteArr, media_type="image/png")


