# Node image
FROM node:20-alpine


# app folder inside container
WORKDIR /app


# copy dependencies files
COPY package*.json ./


# install dependencies
RUN npm install


# copy backend source code
COPY . .


# backend running port
EXPOSE 5050


# start express server
CMD ["npm","run","dev"]