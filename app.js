const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config/database");

//connect to db
mongoose.connect(config.database);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("connected to mongodb");
});
//init app
const app = express();

//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//setup public folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("working");
});

//Start the server
const port = 3000;
app.listen(port, () => {
  console.log("Server Started on port : " + port);
});
