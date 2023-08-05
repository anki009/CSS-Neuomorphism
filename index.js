// to list ut directory names as json object
const fs = require("fs");

const getCurrentDirectories = (path) => {
  return fs
    .readdirSync(path, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

const currentPath = "./";

const directoryNames = getCurrentDirectories(currentPath);

const jsonData = JSON.stringify(directoryNames, null, 2);

console.log(jsonData);
