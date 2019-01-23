FROM node:7
MAINTAINER label="VOID"
COPY . app/
WORKDIR app
RUN npm install 
CMD npm start
EXPOSE 3000
