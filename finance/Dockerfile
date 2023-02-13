FROM node:18-alpine

WORKDIR /app-ecomm/finance

COPY . .

RUN npm config set strict-ssl false

RUN npm install

EXPOSE 3306

ENTRYPOINT npm start