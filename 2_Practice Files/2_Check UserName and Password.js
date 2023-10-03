import { readFile } from "fs";

let userName = "Vasu";
let password = "1245";

readFile("practiceData.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(JSON.parse(data));

  let readData = JSON.parse(data).filter(
    (elem, index) => elem.name == userName && elem.password == password
  );

  console.log(readData);

  if (readData.length == 0) {
    console.log("No User Name Found With This Name or Password !!!");
  } else {
    console.log(
      `Your Username is : ${readData[0].name} && Your Password is : ${readData[0].password}`
    );
  }
});
