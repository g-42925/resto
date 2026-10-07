# Stage 1: Build the React application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy the entire monorepo
COPY . .

# Install all dependencies (workspaces)
RUN npm install

# Build the web application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built SPA files to Nginx's web root
COPY --from=builder /app/dist/apps/web /usr/share/nginx/html

# Copy the custom Nginx configuration to handle SPA client-side routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
