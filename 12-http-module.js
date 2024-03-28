// create server 

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to our home page</h1>');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>This is the about</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">Back home</a>
    `);
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
