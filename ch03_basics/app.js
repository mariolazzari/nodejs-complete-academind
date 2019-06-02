const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { url, method, headers } = req;

  console.log("req url", url);
  console.log("req method", method);
  console.log("req headers", headers);

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Home page</h1>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "ciao");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

server.listen(3000);
