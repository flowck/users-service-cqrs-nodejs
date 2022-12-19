FROM node:slim AS builder
WORKDIR /usr/app
COPY . ./
RUN npm ci
RUN npm run build

FROM node:slim
WORKDIR /usr/app
COPY --from=builder /usr/app/ ./
ENTRYPOINT [ "node", "./dist/index.js" ]