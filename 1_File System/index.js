console.log("Rohit Soni !!");

const fs = require("fs");

/***************__________File Reading_________________*****************/

// Reading A File Synchronously

// use readFileSync()

let dataRead = fs.readFileSync("data.txt", "utf8");

console.log("Readed Data :: ===>", dataRead);

// Reading File Asynchronously

let DataReaded = fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Something Went Wrong !!");
  } else {
    console.log("Reading Data ==>", data);
  }
});

/***************__________File Creating_________________*****************/

/* There are several ways to create new files in the File System module:

fs.appendFile()   Appends new content to the existing file.
fs.open() Opens A File
 
Best way To Create New File is  :1st_place_medal:
fs.writeFile()    */

fs.writeFile("myInformation.txt", "Tarun", (err) => {
  if (err) console.log(err);
  else console.log("Write operation complete. !");
});

/***************__________File Writing or File Updation _________________*****************/

/* Updates to files can be made using the File System module’s methods:

fs.writeFile() The selected file and its contents are replaced with new One
fs.appendFile() Adds more Dats to Existing File */

fs.appendFile("myInformation.txt", "This is NEW Content Added", (err) => {
  if (err) throw err;
  console.log("Updated!");
});

/***************__________File Removal _________________*****************/

// Use the fs.unlink() method to remove a file with the File System module.

// Creates New File

fs.writeFile("myInformation 2.txt", "New File", (err) => {
  if (err) console.log(err);
  else console.log("Write operation complete. !");
});

// Deletes The File

fs.unlink("myInformation 2.txt", (err) => {
  if (err) throw err;
  console.log("File deleted!");
});

/***************__________File File Renaming _________________*****************/

// Use the fs.rename() method in the File System module to rename a file.

fs.rename("data.txt", "File4.txt", (err) => {
  if (err) throw err;
  console.log("File Renamed!");
});
