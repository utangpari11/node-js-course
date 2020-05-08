/*
console.log("util.js");
const add = function(a, b) {
  return a + b;
};
module.exports = add;
*/

//Challenge - read file from notes.txt and pass to app.js via util.js
const fileSystem = require("fs");
const getNotes = function() {
  return fileSystem.readFileSync("notes.txt", "utf-8");
};
module.exports = getNotes;
