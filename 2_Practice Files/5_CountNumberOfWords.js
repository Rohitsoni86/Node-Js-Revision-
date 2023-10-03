import fs from "fs";

let Data = fs.readFileSync("./myInfo.txt", "utf-8");
console.log(Data);

let arrOfChar = Data.split(" "); // Split the String into Characters
console.log(arrOfChar.length);
