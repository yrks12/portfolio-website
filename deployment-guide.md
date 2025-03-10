# Deployment Guide for Handmade Jewelry E-Commerce Site

## Step 1: Environment Setup
- Ensure that Node.js (version 14) and Docker are installed on your system.
- Clone the repository:
  ```bash
  git clone https://github.com/yrks12/portfolio-website.git
  cd portfolio-website
  ```

## Step 2: Docker Configuration
- Navigate to the root of the project where the `Dockerfile` and `docker-compose.yml` are located.
- Build and run the containers:
  ```bash
  docker-compose up --build
  ```

## Step 3: Accessing the Application
- Once the containers are running, you can access the application by opening a web browser and navigating to `http://localhost:5000`
- Ensure the MongoDB service is up by testing the database connection if applicable.

## Step 4: CI/CD Pipeline
- The CI/CD pipeline is configured using GitHub Actions and will automatically deploy on pushing to the main branch.

## Step 5: Monitoring and Logs
- Monitoring should be set up using tools like New Relic or Datadog.
- Logs can be viewed from the container console output or set up to persist in a logging service.

## Step 6: Backup Procedures
- Ensure that MongoDB backups are scheduled using `mongodump` and `mongorestore` scripts for disaster recovery.