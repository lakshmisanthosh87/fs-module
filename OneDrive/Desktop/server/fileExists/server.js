
const fs = require("fs");


const fileExists = fs.existsSync("temp.txt");

if (fileExists) {
    console.log("File exists!");
} else {
    console.log("File does not exist!");
}


// const fs = require("fs");


// const fileExists = fs.existsSync("temp.txt");

// if (fs.existsSync("notes.txt")) {
//     const content = fs.readFileSync("notes.txt", "utf8");
//     console.log("File content:", content);
// } else {
//     console.log("File not found, creating a new one...");
//     fs.writeFileSync("notes.txt", "Hello, world!");
// }
