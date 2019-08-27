FROM node:10.13-alpine

ENV NODE_ENV production
WORKDIR /usr/src/api
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .

EXPOSE 8081

CMD ["npm","start"]
