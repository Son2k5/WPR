const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  if (q.pathname === '/hello' && q.query.name) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello ${q.query.name}`);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(8000, () => console.log('Node.js server running at http://localhost:8000'));
