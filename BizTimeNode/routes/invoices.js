const express = require("express");
const router = express.Router();
const db = require("../db");
const ExpressError = require("../expressError");
// const app = express();

router.get("/", async (req, res, next) => {
  const results = await db.query("SELECT * FROM invoices;");
  return res.json({ invoices: results.rows });
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const result = await db.query(
    `SELECT i.id, 
            i.comp_code, 
            i.amt, 
            i.paid, 
            i.add_date, 
            i.paid_date, 
            c.name, 
            c.description 
     FROM invoices AS i
       INNER JOIN companies AS c ON (i.comp_code = c.code)  
     WHERE id = $1`,
    [id]
  );
  if (result.rows.length === 0) {
    throw new ExpressError(`Cant find invoice with id of ${id}`, 404);
  }
  const data = result.rows[0];
  const invoice = {
    id: data.id,
    amt: data.amt,
    paid: data.paid,
    add_date: data.add_date,
    paid_date: data.paid_date,
    company: {
      code: data.comp_code,
      name: data.name,
      description: data.description,
    },
  };
  return res.send({ invoice: invoice });
});

router.post("/", async (req, res, next) => {
  const { comp_code, amt } = req.body;
  const results = await db.query(
    "INSERT INTO invoices (comp_code,amt) VALUES ($1,$2) RETURNING *",
    [comp_code, amt]
  );
  return res.status(201).json({ invoice: results.rows[0] });
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { amt } = req.body;
    const results = await db.query(
      "UPDATE invoices SET amt=$1 WHERE id = $2 RETURNING *",
      [amt, id]
    );
    if (results.rows.length === 0) {
      throw new ExpressError("This is not a valid invoice id");
    }
    return res.json({ invoice: results.rows[0] });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await db.query("DELETE FROM invoices WHERE id = $1", [id]);
    return res.json({ status: "deleted" });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
