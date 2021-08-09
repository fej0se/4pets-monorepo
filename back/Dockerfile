FROM node:lts as base

ENV NODE_ENV=staging
ENV DB_HOST=144.126.222.3
ENV DB_PORT=32768
ENV DB_USER=root
ENV DB_PASS=@ESPM^H-;2WZ
ENV DB_DIALECT=mysql
ENV DB_NAME_TEST=test_database_name
ENV DB_NAME_STAGING=staging_database_name
ENV DB_NAME_PRODUCTION=production_database_name
ENV PORT=3333
WORKDIR /app
COPY package*.json ./
ENV PATH /app/node_modules/.bin:$PATH

RUN npm i -g @nestjs/cli
RUN yarn install
COPY . .
RUN yarn build

CMD ["yarn", "start:prod"]