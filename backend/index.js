const connectToMongo = require("./db");
connectToMongo();
const express = require("express"); //Import Express Module
const app = express(); //Create an Express Application
const port = 3000; //Define a Port Number

app.use(express.json());

app.use("/api/auth", require("./routes/auth")); //Define a Route
app.use("/api/notes", require("./routes/notes")); //Define a Route

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); //Start the Server
