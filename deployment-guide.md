# Deployment Guide for Portfolio Website

## Overview
This guide provides the steps to deploy the Portfolio Website using the configured CI/CD pipeline and Docker.

## Prerequisites
- Ensure that Docker and Docker Compose are installed on your server.
- Access to the server terminal.
- Repository access to the GitHub repository.

## Steps to Deploy
1. **Clone the Repository**
   Run the following command to clone the repository:
   ```bash
   git clone https://github.com/yrks12/portfolio-website.git
   cd portfolio-website
   ```

2. **Build Docker Images**
   Use Docker Compose to build the images specified in the `docker-compose.yml`:
   ```bash
   docker-compose build
   ```

3. **Run Docker Containers**
   Start the application using Docker Compose:
   ```bash
   docker-compose up -d
   ```
   This will run both the web application and MongoDB as a service.

4. **Access the Application**
   Open your browser and navigate to `http://<your-server-ip>:5000` to see the deployed application.

5. **Monitor Logs**
   To see logs for the application, you can run:
   ```bash
   docker-compose logs
   ```

6. **Backup and Recovery**
   - For MongoDB, run the `mongodump` command to create a backup.
   - Ensure to periodically backup your Docker volumes as specified in the `docker-compose.yml` file.