const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("../routes/index");

const dbConfig = require("./db");

// MongoDB Configuration
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true
  })
  .then(
    () => {
      console.log("Database sucessfully connected.");
    },
    error => {
      console.log("Database could not be connected: ", error);
    }
  );

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(cors());
app.use("/api", router);

const port = process.env.port || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port ", port);
});

app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

app.use(function(err, req, res, next) {
    console.error(err.message);
    
    if (!err.statusCode ) {
        err.statusCode = 500;
    }
    res.status(err.statusCode).send(err.message);
})