# Check out https://hub.docker.com/_/node to select a new base image
FROM node:17
ENV NODE_ENV=production
WORKDIR /app
COPY . .
RUN npm install --production --silent
RUN chown -R node /app
EXPOSE 3000
USER node
CMD ["npm", "install"]