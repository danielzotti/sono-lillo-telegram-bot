FROM node:14.12.0-alpine as build-stage

WORKDIR app

COPY package*.json ./

RUN npm install

# copy all files from workspace into workdir /app
COPY . .

# Serve the app
CMD npm run start
