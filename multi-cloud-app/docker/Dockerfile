FROM node:16
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["node", "backend/server.js"]
EXPOSE 5000