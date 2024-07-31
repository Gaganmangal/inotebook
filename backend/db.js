const mongoose = require("mongoose"); //Mongoose library ko import kiya jata hai, jo MongoDB ke saath object modeling aur schema-based interactions ke liye use hoti hai.
const mongoURI = "mongodb://localhost:27017/inotebook"; //mongoURI variable mein MongoDB server ka URI define kiya jata hai. Yahan localhost par port 27017 (default MongoDB port) ka use kiya gaya hai.

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)//mongoose.connect(mongoURI): MongoDB server se connection establish karta hai.
    .then(() => {
      console.log("Connected to MongoDB");//.then(): Agar connection successful hota hai, to 'Connected to MongoDB' message console pe print hota hai.
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);//.catch(): Agar connection fail hota hai, to error message console pe print hota hai.
    });
};

module.exports = connectToMongo;
