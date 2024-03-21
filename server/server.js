const express = require("express");
const app = express();
const profile = require("./routes/profile");
require("dotenv").config();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/profile", profile);

// server start
const PORT = process.env.PORT || 3000;

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening to port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
