FROM node:20
WORKDIR /usr/app/
EXPOSE 80
RUN apt-get update && apt-get install -y git-all
RUN git clone --depth=1 https://github.com/Raytem/evaluationgMaterial-App.git
WORKDIR /usr/app/evaluationgMaterial-App
RUN npm install
RUN npm run build
CMD npm run start:prod