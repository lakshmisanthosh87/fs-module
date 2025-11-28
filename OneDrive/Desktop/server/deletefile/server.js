// const path = require("path");
// const fs = require("fs");

//const tempFilePath = path.join(__dirname, "temp.txt"); 

// function deleteFile() {
//   fs.unlink(tempFilePath, (err) => {
//     if (err) {
//       console.error("Error deleting file:", err);
//       return;
//     }
//     console.log("File deleted successfully!");
//   });
// }

// deleteFile();




// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// // Path to the file
// const tempFilePath = path.join(__dirname, "temp.txt");

// const server = http.createServer((req, res) => {
//   if (req.url === "/delete" && req.method === "GET") {
//     // Delete the file
//     fs.unlink(tempFilePath, (err) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("Error deleting file: " + err.message);
//         return;
//       }
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end("File deleted successfully!");
//     });
//   } else {
//     // Any other route
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Visit /delete to delete temp.txt");
//   }
// });

// // Start the server
// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });





//rm


const fs = require("fs");
const path = require("path");

const tempFilePath = path.join(__dirname, "temp.txt"); 

fs.rm(tempFilePath, { force: true }, (err) => {
  if (err) {
    console.error("Error deleting file:", err);
    return;
  }
  console.log("File deleted using fs.rm()");
});
