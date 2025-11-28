const fs = require("fs");

// Folder name
const folderName = "backup";

// Check if folder exists
if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
  console.log("Backup folder created!");
} else {
  console.log("Backup folder already exists.");
}
