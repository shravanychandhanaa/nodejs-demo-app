CI/CD Pipeline for a Node.js Application

Project Objective



The goal of this project was to set up a continuous integration and continuous deployment (CI/CD) pipeline for a simple Node.js web application. The pipeline automates the process of building a Docker image, pushing it to Docker Hub, and making it available for deployment. This was accomplished using GitHub Actions.

Technologies Used



&nbsp;   Node.js: The runtime environment for the web application.



&nbsp;   Express: A web framework for Node.js used to build the application.



&nbsp;   Docker: Used to containerize the application, providing a consistent and isolated environment.



&nbsp;   GitHub: The code hosting platform for the repository.



&nbsp;   GitHub Actions: The CI/CD tool used to automate the workflow.



&nbsp;   Docker Hub: A cloud-based repository service used to store and share the Docker image.



CI/CD Pipeline: The main.yml Workflow



The core of this project is the CI/CD workflow defined in the .github/workflows/main.yml file. This workflow is automatically triggered on every push to the main branch.



The pipeline consists of a single job named build\_and\_push with the following steps:



&nbsp;   Checkout repository: Fetches the latest code from the GitHub repository.



&nbsp;   Log in to Docker Hub: Authenticates with Docker Hub using securely stored GitHub Secrets (DOCKERHUB\_USERNAME and DOCKERHUB\_TOKEN).



&nbsp;   Build and push Docker image: Builds the Docker image from the Dockerfile in the repository and pushes it to Docker Hub. The image is tagged with both latest and the unique commit SHA.



Application Structure



The repository contains the following key files:



&nbsp;   server.js: The simple Node.js application that runs on port 3000.



&nbsp;   package.json: Defines the application and its dependencies.



&nbsp;   package-lock.json: Ensures reproducible builds by locking dependency versions.



&nbsp;   Dockerfile: Provides instructions for building the Docker image.



&nbsp;   .dockerignore: Excludes unnecessary files and folders from the Docker image to keep it small and efficient.



How to Run the Application



You can run the application locally on your machine using Docker Desktop.



&nbsp;   Pull the image: Pull the latest image from the Docker Hub repository. Replace your-username with your Docker Hub username.



&nbsp;   docker pull shravanychandhanaa/nodejs-ci-cd-demo:latest (I have included the screenshot)



&nbsp;   Run the container: Run the container and map port 3000 from the container to port 3000 on your local machine.



&nbsp;   docker run -p 3000:3000 your-username/nodejs-ci-cd-demo:latest (use -d to run in detached mode)



&nbsp;   Access the application: Open your web browser and navigate to http://localhost:3000 to see the message. (I have included the screenshot)



Final Outcome



This project successfully demonstrates the automation of a CI/CD pipeline. The pipeline reliably builds and pushes a Docker image of the Node.js application to Docker Hub, ensuring a repeatable and efficient workflow for future code changes.

