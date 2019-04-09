FROM node:10.15.3-jessie

#create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#install app dependencies
COPY package.json /usr/src/app
RUN npm install

#Bundle app source
COPY . /usr/src/app

EXPOSE 4200
CMD ["npm","start"]