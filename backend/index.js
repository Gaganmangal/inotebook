const connectToMongo = require("./db");
connectToMongo();
const express = require("express");//Import Express Module
const app = express();//Create an Express Application
const port = 3000;//Define a Port Number

app.get("/", (req, res) => {
  res.send("Hello Gaganfnr!");
});//Define a Route

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});//Start the Server
