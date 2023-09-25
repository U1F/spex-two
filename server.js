const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    "app",
    req.url === "/" ? "index.html" : req.url
  );
  const extname = path.extname(filePath);
  console.log(filePath);
  console.log(extname);
  let contentType = "text/html";
  switch (extname) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".ico":
      contentType = "image/ico";
      break;
    case ".svg":
      contentType = "image/svg+xml";
      break;
  }
  fs.readFile(filePath, (err, content) => {
    if (err) {
      console.log(err);
      res.writeHead(404, { ContentType: "text/html" });
      res.end("File not found");
    } else {
      res.writeHead(200, {
        "Content-Type": contentType,
      });
      res.end(content);
    }
  });
});

server.listen(3000, () => {
  console.log("Server has been started...");
});
