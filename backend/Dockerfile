FROM node:14-alpine AS build
ENV GITHUB_ACCESS_TOKEN=${GITHUB_ACCESS_TOKEN}
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . . 
RUN npm run build-ts

FROM node:14-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY --from=build app/dist ./dist

ENTRYPOINT ["node", "dist/index.js"]