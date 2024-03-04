FROM node
WORKDIR /usr/src/deel-task

COPY ./package*.json ./
COPY ./tsconfig.json ./tsconfig.json
RUN ls
COPY ./src/ ./src/
RUN npm install -g typescript && npm install
RUN npm install -g ts-node
RUN npm run build

EXPOSE 3000
CMD [ "node", "./dist/server.js" ]
