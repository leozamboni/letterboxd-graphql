FROM node:17

WORKDIR /home/api

# install pnpm
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

COPY package.json .
COPY pnpm-lock.yaml .

RUN pnpm install

COPY . .

CMD pnpm start:dev