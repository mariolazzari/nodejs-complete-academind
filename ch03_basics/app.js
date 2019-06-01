const http = require("http");

const server = http.createServer((req, res) => {
  const { url, method, headers } = req;
  console.log("req url", url);
  console.log("req method", method);
  console.log("req headers", headers);

  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Ciao</h1>");
  res.end();
});

server.listen(3000);
