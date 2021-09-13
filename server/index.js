const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/', express.static(path.resolve(__dirname, '..', 'build')));

// Catch all other GETs and serve SPA
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
