# Deployment Configuration for Portfolio Website

## 1. CI/CD Pipeline Setup
- **Tools**: GitHub Actions
- **Workflow**: Trigger on push and pull request to main branch.
- **Steps**:
  1. Checkout code
  2. Install dependencies (Node.js, React)
  3. Run tests
  4. Build application
  5. Deploy to production server

## 2. Docker Containerization
- **Dockerfile**:
  ```dockerfile
  # Use Node.js as the base image
  FROM node:14

  # Set the working directory
  WORKDIR /app

  # Copy package.json and install dependencies
  COPY package*.json ./
  RUN npm install

  # Copy application files
  COPY . .

  # Build the React app
  RUN npm run build

  # Expose the app on port 5000
  EXPOSE 5000

  # Start the application
  CMD [ "node", "server.js" ]
  ```

## 3. Server Configuration
- **Express Setup** in `server.js`:
  ```javascript
  const express = require('express');
  const mongoose = require('mongoose');

  const app = express();
  app.use(express.json());

  mongoose.connect('mongodb://localhost:27017/portfolio', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

  app.get('/', (req, res) => {
    res.send('Welcome to the Portfolio API');
  });

  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
  ```

## 4. Monitoring and Logging Setup
- **Tools**: PM2 for process management, morgan for HTTP logging.
- **Setup**:
  - Install PM2: `npm install pm2 -g`
  - Start the app: `pm2 start server.js --name "portfolio-app"`
  - Enable logs: `pm2 log portfolio-app`

## 5. Backup and Recovery Procedures
- **Database Backups**: Use `mongodump` to create backups of MongoDB data.
- **File Backups**: Backup application files using `tar` or any cloud storage solution like AWS S3.
- **Recovery**: Restore database with `mongorestore` and application files from backup storage.