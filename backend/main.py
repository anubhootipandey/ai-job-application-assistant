import io

from fastapi import FastAPI,UploadFile,File
import pdfplumber
from model import EmailRequest
from service import EmailGenerator

app=FastAPI()

@app.get("/")
def root():
    return {"status":"backend is running"}

@app.post("/upload-resume")
async def upload_resume(file:UploadFile = File(...)):
    file_bytes = await file.read()

    with pdfplumber.open(io.BytesIO(file_bytes)) as pdf:
        text = ""
        for page in pdf.pages:
            text += page.extract_text() + "\n"
    return {"resume_text": text}

@app.post("/generate-email")
def generate_email(email:EmailRequest):
    response = EmailGenerator().generate_email_from_resume_text(**email.model_dump()) 
    return response