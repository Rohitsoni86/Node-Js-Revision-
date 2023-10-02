const fs = require("fs");

/************____Method @3  Reading 2 Files at a Time***********/

const readMFiles = async (filesArray) => {
  let ResultArr = [];

  for (let i = 0; i < filesArray.length; i++) {
    let fileContent = await fs.promises.readFile(filesArray[i], {
      encoding: "utf-8",
    });
    ResultArr.push(fileContent);
  }

  return ResultArr;
};

let filesAr = ["dummy2.txt", "dummyText.txt", "dummy3.txt"];

readMFiles(filesAr)
  .then((d) => {
    console.log(d);
  })
  .catch((error) => {
    console.log(error);
  });
