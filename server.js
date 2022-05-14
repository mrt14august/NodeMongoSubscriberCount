const express = require("express");
const app = express();
const PORT = 4001;
const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (error) => console.log("error!!! : ", error)); //to see any problem connecting to database

mongoose.connection.once("open", () => console.log("Connected To DB !!!")); //once connected, show when opening the database

app.use(express.json()); // to make server accept json during get/post request

const subscribersRouter = require("./routes/subscribers");
app.use("/subscriber", subscribersRouter); //every url starting with localhost:4001/subscriber will go here

app.listen(PORT, () => {
  console.log(`SERVER RUNNING AT PORT ${PORT}`);
});
