#!/bin/bash

# aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 939823452077.dkr.ecr.us-east-1.amazonaws.com
# docker build -t industry-project .
docker tag industry-project:latest 939823452077.dkr.ecr.us-east-1.amazonaws.com/industry-project:latest
docker push 939823452077.dkr.ecr.us-east-1.amazonaws.com/industry-project:latest