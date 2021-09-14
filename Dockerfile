FROM node:lts AS base

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g rimraf
RUN npm i -g @nestjs/cli

ENV PORT=3000
ENV NODE_ENV=production

WORKDIR /app
COPY package*.json ./
ENV PATH /app/node_modules/.bin:$PATH

COPY . .
RUN yarn install
RUN yarn build:back
COPY ./back/src/infra/** ./back/dist/infra 

CMD ["node", "back/dist/main.js"]