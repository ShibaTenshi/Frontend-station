FROM node:20
COPY .output run
EXPOSE 5032
ENV NITRO_PORT=5032
ENTRYPOINT [ "node", "run/server/index.mjs" ]