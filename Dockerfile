FROM node:7.2.1

WORKDIR /usr/src/app
COPY ./api /usr/src/app
COPY ./app/build /usr/src/app/build
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
