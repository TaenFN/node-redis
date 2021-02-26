FROM node:14.16.0-alpine3.13
LABEL MAINTAINER Taen Ahammed
WORKDIR /usr/src/app
EXPOSE 3000
COPY package*.json .
RUN npm i
COPY . .
CMD [ "node", "app.js"]