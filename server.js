
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function (req, res) {

    let filePath;

    if (req.url === "/") {
        filePath = "index.html";
    } else if (req.url === "/style.css") {
        filePath = "style.css";
    } else if (req.url === "/script.js") {
        filePath = "script.js";
    } else if (req.url === "/image/background.jpg") {
        filePath = "image/background.jpg";
    } else {
        res.writeHead(404);
        res.end("Page not found");
        return;
    }

    const fullPath = path.join(__dirname, filePath);

    let contentType = "text/html";

    if (filePath.endsWith(".css")) {
        contentType = "text/css";
    } else if (filePath.endsWith(".js")) {
        contentType = "text/javascript";
    } else if (filePath.endsWith(".jpg")) {
        contentType = "image/jpeg";
    }

    fs.readFile(fullPath, function (err, data) {

        if (err) {
            res.writeHead(500);
            res.end("Error loading file");
            return;
        }

        res.writeHead(200, {
            "Content-Type": contentType
        });

        res.end(data);
    });
});

server.listen(3000, function () {
    console.log("EmoAura is running...");
    console.log("http://localhost:3000");
});
