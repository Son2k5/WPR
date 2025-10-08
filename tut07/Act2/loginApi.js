const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;


function getUsers() {
  const filePath = path.join(__dirname, 'user.json');
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', (req, res) => {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).send('Missing username or password');
  }

  const users = getUsers();
  const match = users.find(u => u.user === user && u.password === password);

  if (match) {
    res.send('Login successful');
  } else {
    res.send('Invalid username or password');
  }
});

// Chạy server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
