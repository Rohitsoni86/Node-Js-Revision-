const fs = require("fs");

/************____Method @3  Reading 2 Files at a Time***********/

const read2Files = async (path1, path2) => {
  let fileContent_1 = await fs.promises.readFile(path1, { encoding: "utf-8" });
  console.log(fileContent_1);

  let fileContent_2 = await fs.promises.readFile(path2, { encoding: "utf-8" });
  console.log(fileContent_2);

  return `${fileContent_1} ${fileContent_2}`;
};

read2Files("dummy2.txt", "dummyText.txt")
  .then((d) => {
    console.log(d);
  })
  .catch((error) => {
    console.log(error);
  });
