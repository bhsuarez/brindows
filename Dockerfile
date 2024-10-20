# Use the official Node.js image.
FROM node:14

# Set the working directory.
WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Build the application for production.
RUN npm run build

# Install a static server (e.g., serve) to serve the build folder.
RUN npm install -g serve

# Expose the port your app runs on.
EXPOSE 80

# Start the application using the static server.
CMD ["serve", "-s", "build", "-l", "80"]
