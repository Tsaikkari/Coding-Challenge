FROM node:14-alpine AS build

WORKDIR /app
COPY package*.json  ./
RUN npm install 
COPY . . 
EXPOSE 5000
ENTRYPOINT ["npm", "start"]