import fs from "fs";

// Doing Synchronously

// Reading Json Data

const fetchedData = JSON.parse(fs.readFileSync("./practiceData.json"));
console.log(fetchedData);

//updating the stored data with new changes

let newJsonData = fetchedData.map((element, index, arr) => {
  return {
    ...element,
    email: `${element.name} @web.com`,
  };
});

console.log(newJsonData);

// Now Storing It New Json File

// To Store it we need to Stringify The Data and with write FileSync we can store the result by creating a new path

try {
  fs.writeFileSync("newData.json", JSON.stringify(newJsonData), "utf8");
  console.log("Data successfully saved to disk");
} catch (error) {
  console.log("An error has occurred ", error);
}
