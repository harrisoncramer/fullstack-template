const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

app.get('/api/v1', (req, res) => {
  res.status(200).send('Welcome to the API.');
});

/* Only serve static content in production. Use WDS in development. */
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.resolve(__dirname, '..', 'build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
  });
}

app.listen(3000, () => {
  console.log(`API listening on port 3000.`);
});
