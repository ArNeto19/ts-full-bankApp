FROM node:16.16.0-alpine

EXPOSE 3000
RUN mkdir -p /app/public /app/src
WORKDIR /app
COPY tsconfig.json /app/tsconfig.json
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

CMD ["npm", "start"]