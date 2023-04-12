const express = require("express");
const app = express();
const ExpressError = require("./expressError");
const items = require("./fakeDb");
const userRoutes = require("./userRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/items", userRoutes);

//404 handler
app.use(function (req, res) {
  return new ExpressError("Not Found", 404);
});

// generic error handler
app.use(function (err, req, res, next) {
  let status = err.status || 500;
  return res.status(status).json({
    error: {
      message: err.message,
      status: status,
    },
  });
});

module.exports = app;
