const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');

const userrouter = require("./router");

app.use(express.json());

let corsOptions = {
  origin : ['http://localhost:3000'],
}

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "Client", "build")));
  res.sendFile(path.resolve(__dirname, "Client","build","index.html"));
});
// app.use("/", userrouter);

module.exports = app;
