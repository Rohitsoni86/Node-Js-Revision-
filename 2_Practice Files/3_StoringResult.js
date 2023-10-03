import { appendFile } from "fs";

const storeResult = (result) => {
  appendFile("result.txt", `\n....${result}`, (err) => {
    if (err) throw err;
    console.log("Updated Result!");
  });
};

const addNum = (num1, num2) => {
  let addition = num1 + num2;
  console.log(addition);
  storeResult(addition);
};
const subNum = (num1, num2) => {
  let result = num1 - num2;
  console.log(result);
  storeResult(result);
};
const MultiplyNum = (num1, num2) => {
  let result = num1 * num2;
  console.log(result);
  storeResult(result);
};

const DivideNum = (num1, num2) => {
  let result = num1 / num2;
  console.log(result);
  storeResult(result);
};

addNum(5, 5);
subNum(10, 5);
MultiplyNum(2, 5);
