const http = require("http");
const port = 4000;

const products = [
  { id: 0, name: "p1", color: "red", price: 100 },
  { id: 1, name: "p2", color: "blue", price: 200 },
  { id: 2, name: "p3", color: "black", price: 300 },
];

const server = http.createServer((req, res) => {
  const { url } = req;

  if (url === "/home") {
    //localhost:4000/home
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<strong>Welcome to our APIs</strong>");
  } else if (url === "/products") {
    //localhost:4000/products
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } else if (url.startsWith("/products/")) {
    //localhost:4000/products/0
    //localhost:4000/products/1
    //localhost:4000/products/2
    const id = parseInt(url.split("/")[2]);
    if (Number.isNaN(id) || id < 0 || id >= products.length) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Product not found");
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(products[id]));
    }
  } else if (url === "/") {
    //localhost:4000/home
    res.writeHead(302, { Location: "/home" });
    res.end();
  } else {
    //localhost:4000/abc
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
