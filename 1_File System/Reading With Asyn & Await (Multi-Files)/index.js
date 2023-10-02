const fs = require("fs");

async function readFileFromSource(fileName) {
  return await fs.promises.readFile(fileName, "utf8");
}

//async function always return a promise so to get data handle promises

readFileFromSource("dummy2.txt")
  .then((dataR) => {
    console.log("Data ::: ", dataR);
  })
  .catch((err) => {
    console.log("Something Went Wrong !!", err);
  })
  .finally(() => {
    console.log("Reading Is Completed !!");
  });

/************____Method @2***********/

const readFiles = (fileName) => {
  return new Promise(async (resolve, reject) => {
    await fs.readFile(fileName, "utf8", function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

readFiles("dummyText.txt")
  .then((dataR) => {
    console.log("Data ::: ", dataR);
  })
  .catch((err) => {
    console.log("Something Went Wrong !!", err);
  })
  .finally(() => {
    console.log("Reading Is Completed !!");
  });
