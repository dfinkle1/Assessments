const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const {
  findMean,
  convertAndValidateNumsArray,
  findMedian,
  findMode,
} = require("./helpers");

app.get("/mean", (req, res, next) => {
  //   debugger;
  let numsStrings = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsStrings);
  console.log(nums);
  let mean = findMean(nums);
  let result = {
    operation: "mean",
    result: findMean(nums),
  };
  return res.send(result);
});

app.get("/median", (req, res, next) => {
  let numsStrings = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsStrings);
  let result = {
    operation: "median",
    result: findMode(nums),
  };
  return res.send(result);
});

app.get("/mode", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }
  let numsAsStrings = req.query.nums.split(",");
  // check if anything bad was put in
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mode",
    result: findMode(nums),
  };

  return res.send(result);
});

app.get("/all", function (req, res, next) {
  let numsAsStrings = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsAsStrings);
  let result = {
    operation: "mode",
    mean: findMean(nums),
    median: findMedian(nums),
    mode: findMode(nums),
  };
  return res.send(result);
});

app.listen(3000, function () {
  console.log("App on port 3000");
});
