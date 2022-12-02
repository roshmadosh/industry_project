# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine 
# Set the working directory to /app inside the container
WORKDIR /app

COPY . /app/
RUN npm install

EXPOSE 3000
EXPOSE 5000



# Start the app
CMD [ "npm", "start" ]