FROM node:18-alpine

WORKDIR /app-ecomm/order

COPY . .

RUN npm config set strict-ssl false

RUN npm install

EXPOSE 3004

ENTRYPOINT npm start