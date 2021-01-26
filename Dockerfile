FROM python:3.8.7

# if the directory does not exist, WORKDIR creates it
WORKDIR /usr/src/app

COPY requirements.txt ./
RUN python -m pip install -r requirements.txt

# add the rest of the files
# we use .dockerignore to filter out files that shouldn't be added to the container
COPY . ./
