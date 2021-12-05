FROM node:14.18.2-alpine3.14

WORKDIR /app
COPY package* .

RUN apk update && \
    apk upgrade && \
    apk add git && \
    npm install -g vue-cli

COPY . .

EXPOSE 3000
ENV HOST 0.0.0.0
