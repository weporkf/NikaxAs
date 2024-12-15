FROM node:21-alpine3.18 AS build
WORKDIR /app
COPY . /app

RUN yarn
RUN yarn build

CMD ["yarn", "start"]