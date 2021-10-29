FROM node:14-alpine

WORKDIR /usr/src/app
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "node", "src/index.js" ]

EXPOSE 3000
