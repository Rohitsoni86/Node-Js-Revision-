console.log("Rohit Soni !!");

const fs = require("fs");
const path = require("path");

// Move a System File To a New Directory with Node.js
// Luckily, Node.js has a built-in way to do this with their File System (Fs) core module, which has both a fs.rename() and fs.renameSync() method to give a file a new name.

//Both of the move functions will give you the same result, but go about doing it in a little different way. The synchronous fs.renameSync() version will stop your code and wait until the file has been successfully renamed or an error has occurred to continue running. And the asynchronous version fs.rename() will not block your code and return a callback function when the file is removed instead.

const currentPath = path.join(__dirname, "./Folder 1/myInformation.txt");
const newPath = path.join(__dirname, "./Folder 2", "NewMyInformation.txt");

//Synchronous Way

/***************__________fs.renameSync()_________________*****************/

/*try {
  fs.renameSync(currentPath, newPath);
  console.log("Successfully moved the file!");
} catch (err) {
  throw err;
}*/

// Asynchro

/***************__________fs.rename()_________________*****************/

fs.rename(currentPath, newPath, function (err) {
  if (err) {
    throw err;
  } else {
    console.log("Successfully moved the file!");
  }
});
