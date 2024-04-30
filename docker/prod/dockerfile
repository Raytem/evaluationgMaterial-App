FROM node:21
EXPOSE 80
WORKDIR /usr/app/
COPY . .
RUN npm install
RUN npm run build
CMD npm run start:prod