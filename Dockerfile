FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/wol-daemon
WORKDIR /usr/src/wol-daemon

# Install app dependencies
COPY package.json /usr/src/wol-daemon/
RUN npm install

COPY . /usr/src/wol-daemon

EXPOSE 8080

CMD [ "npm", "start" ]