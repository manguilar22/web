FROM node:7
MAINTAINER label="manguilar22@gmail.com"
COPY . app/
WORKDIR app
RUN npm install 
CMD npm start
EXPOSE 3000
