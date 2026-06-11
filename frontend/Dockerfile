# Node image
FROM node:20-alpine


# app directory
WORKDIR /app


# copy package files
COPY package*.json ./


# install dependencies
RUN npm install


# copy next js code
COPY . .


# build next project
RUN npm run build


# next js port
EXPOSE 3000


# start production server
CMD ["npm","start"]