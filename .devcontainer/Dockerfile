# syntax=docker/dockerfile:1
FROM node:lts-alpine

ARG WORK_DIR=/home/node/app

RUN apk add --no-cache git
ENV YARN_CACHE_FOLDER=/cache/yarn
WORKDIR ${WORK_DIR}

# Install packages
COPY package*.json yarn.lock ./
RUN --mount=type=cache,target=/cache/yarn \
  yarn install
