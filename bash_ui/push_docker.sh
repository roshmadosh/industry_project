#!/bin/bash

#aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 939823452077.dkr.ecr.us-east-1.amazonaws.com
docker build -t industry-ui .
docker tag industry-ui:latest 939823452077.dkr.ecr.us-east-1.amazonaws.com/industry-ui:latest
docker push 939823452077.dkr.ecr.us-east-1.amazonaws.com/industry-ui:latest