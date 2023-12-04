const express = require('express');
const cors = require('cors');
const data = require('./data.json');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/restaurants', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});