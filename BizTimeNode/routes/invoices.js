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

router.put("/:id", async (req, res, next) => {
  try {
    // const { id } = req.params;
    let { amt, paid } = req.body;
    let id = req.params.id;
    let paidDate = null;

    const currResult = await db.query(
      "SELECT paid FROM invoices WHERE id =$1",
      [id]
    );
    if (currResult.rows.length === 0) {
      throw new ExpressError(`No such invoice: ${id}`, 404);
    }
    const currPaidDate = currResult.rows[0].paid_date;

    if (!currPaidDate && paid) {
      paidDate = new Date();
    } else if (!paid) {
      paidDate = null;
    } else {
      paidDate = currPaidDate;
    }

    const result = await db.query(
      `UPDATE invoices
           SET amt=$1, paid=$2, paid_date=$3
           WHERE id=$4
           RETURNING id, comp_code, amt, paid, add_date, paid_date`,
      [amt, paid, paidDate, id]
    );
    return res.json({ invoice: result.rows[0] });
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
