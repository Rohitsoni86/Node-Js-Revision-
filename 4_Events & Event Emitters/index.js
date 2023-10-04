const EventEmiter = require("events");

const Emmiter = new EventEmiter();

Emmiter.on("Pop Up On Loading", () => {
  setTimeout(() => {
    console.log("Hello, World!");
  }, 3000);
  console.log("Are You 18 Above ?");
});

Emmiter.emit("Pop Up On Loading");
