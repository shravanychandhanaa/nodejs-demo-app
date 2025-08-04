# Use an official Node.js runtime as the base image.
# We're using the slim version to keep the image size smaller.
FROM node:18-slim

# Set the working directory inside the container.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory.
# We do this first to leverage Docker's build cache.
COPY package*.json ./

# Install application dependencies.
# The `npm ci` command is used for a clean installation based on package-lock.json.
# This ensures reproducible builds.
RUN npm ci

# Copy the rest of the application source code into the working directory.
COPY . .

# Expose the port that the app will run on.
EXPOSE 3000

# Define the command to run the application when the container starts.
CMD [ "npm", "start" ]
