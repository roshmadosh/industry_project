from fastapi import FastAPI, Response
from .graph import bell_curve_salary_to_rent_plot, rent_histogram
from PIL import Image
import io
from fastapi.middleware.cors import CORSMiddleware
  
# open method used to open different extension image file

origins = [
    '*'
]


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/data/plot/{ratio}", responses = { 200: { "content": {"image/png": {}}}}, response_class=Response)
async def generate_plot(ratio):

    bell_curve_salary_to_rent_plot(float(ratio))
    
    image = Image.open("testplot.png") 
    byteIO = io.BytesIO()
    image.save(byteIO, format='PNG')
    byteArr = byteIO.getvalue()
    return Response(content=byteArr, media_type="image/png")


@app.get('/data/hist/{rent}/{location}')
async def generate_histo(rent, location):
    rent_histogram(float(rent), location)

    image = Image.open("hist.png") 
    byteIO = io.BytesIO()
    image.save(byteIO, format='PNG')
    byteArr = byteIO.getvalue()
    return Response(content=byteArr, media_type="image/png")    


