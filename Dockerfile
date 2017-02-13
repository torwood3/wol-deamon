FROM node:boron

WORKDIR /app

# Install app dependencies
COPY package.json /app/
RUN npm install --production

COPY . /app/

EXPOSE 8080

CMD [ "npm", "start" ]