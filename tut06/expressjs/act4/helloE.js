const express = require('express');
const app = express();

app.get('/hello/:name', (req, res) => {
  const name = req.params.name || 'Guest';
  res.send(`Hello ${name}`);
});

app.listen(8000, () => console.log('Express server running at http://localhost:8000'));
