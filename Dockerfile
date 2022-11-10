FROM node:16

# set working directory
WORKDIR /app

EXPOSE 443

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["HTTPS=true", "SSL_CRT_FILE=.cert/server.crt", "SSL_KEY_FILE=.cert/server.key", "npm", "start"]