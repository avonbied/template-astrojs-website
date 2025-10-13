# syntax=docker/dockerfile:1
FROM docker.io/node:lts-alpine

ARG WORK_DIR=/home/app

RUN apk add --no-cache git gpg
ENV YARN_CACHE_FOLDER=/cache/yarn
WORKDIR ${WORK_DIR}

# Install packages
COPY package*.json yarn.lock ./
RUN --mount=type=cache,target=/cache/yarn \
  yarn install
