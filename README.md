CI/CD Pipeline for a Node.js Application

\###Project Objective



The goal of this project was to set up a continuous integration and continuous deployment (CI/CD) pipeline for a simple Node.js web application. The pipeline automates the process of building a Docker image, pushing it to Docker Hub, and making it available for deployment. This was accomplished using GitHub Actions, including an automated testing phase.

Technologies Used



&nbsp;   Node.js: The runtime environment for the web application.



&nbsp;   Express: A web framework for Node.js used to build the application.



&nbsp;   Mocha: A popular JavaScript test framework used for running tests.



&nbsp;   Chai: An assertion library used with Mocha for writing expressive test assertions.



&nbsp;   Supertest: A library for testing HTTP assertions, making it easy to test Express routes.



&nbsp;   Docker: Used to containerize the application, providing a consistent and isolated environment.



&nbsp;   GitHub: The code hosting platform for the repository.



&nbsp;   GitHub Actions: The CI/CD tool used to automate the workflow.



&nbsp;   Docker Hub: A cloud-based repository service used to store and share the Docker image.



\###Application Structure



The repository contains the following key files:



&nbsp;   server.js: The simple Node.js application that runs on port 3000. This file is structured to export the Express app for testing while still allowing direct execution.



&nbsp;   package.json: Defines the application and its dependencies (including development dependencies for testing).



&nbsp;   package-lock.json: Ensures reproducible builds by locking dependency versions.



&nbsp;   Dockerfile: Provides instructions for building the Docker image.



&nbsp;   .dockerignore: Excludes unnecessary files and folders from the Docker image to keep it small and efficient.



&nbsp;   test/server.test.js: Contains the unit/integration tests for the Express server.



\###CI/CD Pipeline: The main.yml Workflow



The core of this project is the CI/CD workflow defined in the .github/workflows/main.yml file. This workflow is automatically triggered on every push to the main branch.



The pipeline consists of two main jobs:



&nbsp;   test Job:



&nbsp;       Purpose: This job is responsible for running the automated tests for the Node.js application.



&nbsp;       Steps:



&nbsp;           Checks out the repository code.



&nbsp;           Sets up the Node.js environment.



&nbsp;           Installs all Node.js dependencies (including development dependencies for testing) using npm ci.



&nbsp;           Executes the tests using npm test.



&nbsp;       Outcome: If any tests fail, this job will fail, and the entire workflow will stop, preventing a faulty image from being built or pushed.



&nbsp;   build\_and\_push Job:



&nbsp;       Purpose: This job builds the Docker image and pushes it to Docker Hub.



&nbsp;       Dependency: This job is configured to needs: test, meaning it will only run if the test job completes successfully.



&nbsp;       Steps:



&nbsp;           Checks out the repository code.



&nbsp;           Logs into Docker Hub. The Docker Hub credentials (DOCKERHUB\_USERNAME and DOCKERHUB\_TOKEN) are securely stored as GitHub Secrets to prevent them from being exposed in the workflow file.



&nbsp;           Builds the Docker image from the Dockerfile.



&nbsp;           Pushes the built image to the specified Docker Hub repository, tagging it with both latest and the unique Git commit SHA.



\###How to Run the Application



You can run the application locally on your machine using Docker, after it has been built and pushed by the CI/CD pipeline.



&nbsp;   Pull the image: First, ensure your local Docker client is logged into Docker Hub (docker login). Then, pull the latest image from the Docker Hub repository. Replace your-username with your actual Docker Hub username.



&nbsp;   docker pull your-username/nodejs-ci-cd-demo:latest



&nbsp;   Run the container: Run the container and map port 3000 from the container to port 3000 on your local machine.



&nbsp;   docker run -p 3000:3000 your-username/nodejs-ci-cd-demo:latest



&nbsp;   Access the application: Open your web browser and navigate to http://localhost:3000 to see the "Hello World" message.



Final Outcome



This project successfully demonstrates a complete CI/CD pipeline with automated testing. The pipeline ensures that every code change is tested, and only if tests pass, a new Docker image is built and made available on Docker Hub, ready for deployment to any compatible hosting environment.

