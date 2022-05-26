# Name the node stage "builder"
FROM node:14-alpine AS builder
# Set working directory
WORKDIR /app
# Copy dependency files to working dir
COPY ./package.json ./
COPY ./yarn.lock ./
# Install dependencies
RUN yarn
# Copy the rest from current directory to working dir in image
COPY . .
# Build
RUN yarn build

# Nginx stage for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/public .
# Copy nginx config to image
COPY ./nginx.conf /etc/nginx/nginx.conf
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]