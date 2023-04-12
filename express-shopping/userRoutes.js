const express = require("express");
const router = new express.Router();
const ExpressError = require("./expressError");
// const app = express();
// const items = require("./fakeDb");

router.get("/", (req, res) => {
  res.json(items);
});

router.post("/", (req, res) => {
  const newItem = { name: req.body.name, price: req.body.price };
  items.push(newItem);
  res.status(201).json({ Items: items });
});

router.get("/:name", (req, res) => {
  const foundItem = items.find((item) => item.name === req.params.name);
  if (foundItem === undefined) {
    throw new ExpressError("Cat not found", 404);
  }
  res.json(foundItem);
});

router.patch("/:name", (req, res) => {
  const foundItem = items.find((item) => item.name === req.params.name);
  if (foundItem === undefined) {
    throw new ExpressError("Cat not found", 404);
  }
  foundItem.name = req.body.name;
  res.json(foundItem);
});

router.delete("/:name", (req, res) => {
  const foundItem = items.find((item) => item.name === req.params.name);
  if (foundItem === -1) {
    throw new ExpressError("Cat not found", 404);
  }
  items.splice(foundItem, 1);
  res.status(200).json({ message: "deleted" });
});

module.exports = router;
