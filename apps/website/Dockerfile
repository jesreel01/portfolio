# Stage 1: install dependencies
FROM node:17-alpine AS deps
WORKDIR /app
COPY --chown=node:node package.json .
RUN npm install

COPY --chown=node:node . .
USER node

CMD ["npm", "run", "dev"]