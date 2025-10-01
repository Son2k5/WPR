const express = require('express');
const app = express();

app.get('/math/rectangle/:width/:height', (req, res) => {
  const w = parseFloat(req.params.width);
  const h = parseFloat(req.params.height);
  const area = w * h;
  const perimeter = 2 * (w + h);
  res.json({ area, perimeter });
});

app.listen(8000, () => console.log('Rectangle API at http://localhost:8000/math/rectangle/5/10'));
