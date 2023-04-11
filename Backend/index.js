const express = require("express");
const {Connection} = require("./src/Config/db");

const app = express();

app.use(express.json());

app.listen(8400, async () => {
  console.log("Server Started At http://localhost:8400");
  try {
    await Connection;
    console.log("Connected To Database");
  } catch (err) {
    console.log(err);
  }
});
