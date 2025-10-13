# syntax=docker/dockerfile:1
FROM docker.io/denoland/deno:alpine AS deno
FROM docker.io/alpine:latest

ARG WORK_DIR=/home/app
ARG CACHE_DIR=/cache/deno

COPY --from=deno /bin/deno /usr/bin/deno
COPY --from=deno --chown=root:root --chmod=755 /usr/local/lib/* /usr/lib
RUN mkdir /lib64 \
	&& ln -s /usr/lib/ld-linux-* /lib64

ENV LD_LIBRARY_PATH=/usr/lib
ENV DENO_DIR=${CACHE_DIR}
ENV DENO_NO_PROMPT=1
ENV DENO_NO_UPDATE_CHECK=1

RUN apk update && \
	apk add --no-cache git gpg libstdc++

WORKDIR ${WORK_DIR}

# Install packages
COPY deno.json* deno.lock ./
RUN --mount=type=cache,target=${CACHE_DIR} \
	deno install