# Deployment Guide for Portfolio Website

## Prerequisites
- Node.js v14
- Docker and Docker Compose
- MongoDB

## Setting Up the Environment
1. Clone the repository:
   ```
   git clone https://github.com/yrks12/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables in a `.env` file:
   ```
   MONGO_URI=mongodb://localhost:27017/portfolio
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password
   ```

## Running the Application
1. Build and run the Docker containers:
   ```
   docker-compose up --build
   ```

2. Access the application at `http://localhost:5000`

## CI/CD Pipeline
- Upon pushing changes to the `main` branch, the pipeline will run automated tests and deploy the application if tests pass.

## Backup and Recovery
- Automated daily backups of the MongoDB database are configured. Ensure to check the backup logs.
