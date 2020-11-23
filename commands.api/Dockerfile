FROM node:14-alpine
# Set working directory
WORKDIR /app
# Copy dependency files to working dir
COPY ./package.json ./
COPY ./yarn.lock ./
# Install dependencies
RUN yarn install
# Copy the rest from current directory to working dir in image
COPY . .
# Build application
RUN yarn build
# Expose default port
EXPOSE 1337
# Start api server
CMD ["yarn","start"]