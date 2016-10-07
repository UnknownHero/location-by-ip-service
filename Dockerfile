FROM node:6.6.0

RUN npm install -g nodemon

WORKDIR /usr/src/application

COPY ./application/package.json /usr/src/application/package.json
RUN npm install

COPY ./application /usr/src/application

CMD ["make", "start"]