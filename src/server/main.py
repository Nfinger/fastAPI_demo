"""FastAPI server Initialization and routing."""
from devtools import debug
from fastapi import FastAPI, Request
from pydantic import BaseModel

# [IMPORT NEW ROUTER ABOVE] < Needed for generating resources seamlessly

app = FastAPI()
# [INCLUDE NEW ROUTER ABOVE] < Needed for generating resources seamlessly

@app.get("/")
async def root():
    """Health Check Route"""
    return {"message": "Im Alive!"}
