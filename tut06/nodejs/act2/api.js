const http = require('http');
const url = require('url');
const { getProducts } = require('./dataProvider');

let products = getProducts();

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // đổi tên consistent

  if (req.method === "GET" && parsedUrl.pathname === "/products") {
    // Lấy toàn bộ danh sách
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  }
  else if (req.method === 'GET' && parsedUrl.pathname.startsWith('/products/')) {
    // Lấy theo id
    const id = parseInt(parsedUrl.pathname.split('/')[2]);
    const product = products.find(p => p.id === id);

    if (product) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(product));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Product not found');
    }
  }
  else {
    res.writeHead(404, { "Content-Type": 'text/plain' });
    res.end('Route not found');
  }
});

server.listen(8000, () => {
  console.log('Product API running at http://localhost:8000');
});
