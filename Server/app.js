const express = require("express");
const cors = require("cors");
const app = express();

const userrouter = require("./router");

app.use(express.json());

let corsOptions = {
  origin : ['http://localhost:3000'],
}

app.use(cors(corsOptions));

app.use("/", userrouter);

module.exports = app;
