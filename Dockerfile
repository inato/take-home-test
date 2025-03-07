FROM node:22.14.0-slim

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm

WORKDIR /usr/src

COPY package.json /usr/src/package.json
RUN pnpm i

COPY . /usr/src/

CMD ["pnpm", "start"]