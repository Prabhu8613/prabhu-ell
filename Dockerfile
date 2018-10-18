FROM node:9.6.1

LABEL maintainer="Prasad"

RUN mkdir /usr/uj3angularapp

WORKDIR /usr/uj3angularapp

COPY package.json /usr/uj3angularapp

RUN npm install -g @angular/cli@6.0.8

COPY . /usr/uj3angularapp

EXPOSE 4203

CMD ng serve --host 0.0.0.0 --port 4203
