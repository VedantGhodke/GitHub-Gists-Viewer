FROM node:alpine

ADD . /app
RUN npm install --global yarn
WORKDIR /app
RUN yarn

CMD ["yarn", "build"]