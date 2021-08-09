FROM node:lts as base

ENV NODE_ENV=production
ENV REACT_APP_API_URL=http://localhost:3333/api/v1
WORKDIR /app
COPY package*.json ./
ENV PATH /app/node_modules/.bin:$PATH

RUN npm i -g serve
RUN yarn install
COPY . .
RUN yarn build

CMD ["yarn", "start:prod"]