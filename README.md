# React Template Repository

This is a template repository for a full-stack, dockerized application using React, React-Router, Webpack, Express, and SASS. It includes:

- Webpack production optimizations
- Webpack proxying for backend
- Multi-stage docker build for minimal image
- SASS & loaders for styling
- Express for SPA backend
- React-router for routes
- Lazy-loading for optimization
- BundleAnalyzerPlugin for bundle management
- URL Loader for Images/Assets
- Jest for test running
- Supertest for backend tests
- React-Testing-Library for frontend tests
- Github Actions for CI**
- Docker for containerization
- ESLint for Linting

## Docker

Build the image: `docker build -t yourusername/yourapp . `

Run the image (map the ports): `docker run -dit -p 3000:3000 yourusername/yourapp`

**Github Actions 
The github actions in this repository are configured to build and push a Docker image to my account by default. You can either delete the `.github` folder or configure them with your own account + credentials.
