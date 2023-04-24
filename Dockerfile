FROM node:18.12.1
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY config.env ./
RUN npm install
COPY . .

CMD ["npm","run","dev"]

