const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
//Middleways
app.use(cors());
app.use(bodyParser.json());
//Routes
const homeRoute = require("./routes/home");
const drugRoute = require("./routes/drugs");
//Mongo Connect
mongoose.connect(process.env.MONGO_DB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/", homeRoute);
app.use("/drugs", drugRoute);
//Server start
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
