// Tiny static server for the Irish pages: node server.js, then open http://localhost:5185
const http = require("http"), fs = require("fs"), path = require("path");
const root = __dirname, port = process.env.PORT || 5185;
const types = { ".html":"text/html; charset=utf-8", ".js":"text/javascript", ".css":"text/css", ".json":"application/json", ".png":"image/png", ".svg":"image/svg+xml" };

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/") p = fs.existsSync(path.join(root, "index.html")) ? "/index.html" : "/t1-an-scolaire-fein.html";
  const file = path.normalize(path.join(root, p));
  if (!file.startsWith(root)) { res.writeHead(403); return res.end("Forbidden"); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end("Not found"); }
    res.writeHead(200, { "content-type": types[path.extname(file)] || "application/octet-stream", "cache-control": "no-store" });
    res.end(data);
  });
}).listen(port, () => console.log(`Irish course running at http://localhost:${port}`));
