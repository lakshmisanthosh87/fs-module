const http = require("http");
const fs = require("fs");
const path = require("path");

const deletedPath = path.join(__dirname, "detele", "temp.txt");

const server = http.createServer((req, res) => {
    if (req.url === "/delete" && req.method === "GET") {
        fs.unlink(deletedPath, (err) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                return res.end("Error deleting file: " + err.message);
            }

            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("File deleted successfully");
        });

    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Route not found");
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
