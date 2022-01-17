# React Template Repository

This is a template repository for a full-stack, dockerized application using React, Vite, Express, and Tailwind. It includes:

- Vite for fast reloads
- Tailwind for utility-first styling
- Express for SPA backend
- React-router for routes
- Lazy-loading for optimization
- Supertest for backend tests
- React-Testing-Library for frontend tests
- Github Actions for CI\*\*
- Docker for containerization

## Installation

`npm install`

## Development

Full Dev: `npm run start`

Backend only: `npm run start:express`

Frontend only: `npm run start:vite`

## Tests

`npm run test`

## Docker

Build the image: `docker build -t yourusername/yourapp . `

Run the image (map the ports): `docker run -dit -p 3000:3000 yourusername/yourapp`

## Github Actions

The github actions in this repository are configured to build and push a Docker image to my account by default. You can either delete the `.github` folder or configure them with your own account and credentials. You may also delete the docker job, leaving the other CI tests in place.
