FROM node:lts AS base

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g rimraf

ENV PORT=3000
ENV NODE_ENV=production

WORKDIR /app
COPY package*.json ./
ENV PATH /app/node_modules/.bin:$PATH

RUN yarn install
COPY . .
RUN yarn build:back

CMD ["node", "back/dist/main.js"]