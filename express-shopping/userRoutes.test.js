process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("./app");
let items = require("./fakeDb");

let candy = { name: "candy", price: 1.45 };

beforeEach(function () {
  items.push(candy);
});
afterEach(function () {
  items.length = 0;
});

describe("GET /items", function () {
  test("Gets a list of items", async function () {
    const res = await request(app).get("/items");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([candy]);
  });
});

describe("GET /items/:name", function () {
  test("GETS a single items name", async function () {
    const res = await request(app).get("/items/candy");
    expect(res.statusCode).toBe(200);
  });
  test("responds with 404 if can't find item", async function () {
    const res = await request(app).get("/items/0");
    expect(res.statusCode).toBe(404);
  });
});

describe("POST /items", function () {
  test("POST add items to Database", async function () {
    const res = await request(app).post("/items").send(candy);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ Items: items });
  });
});

describe("PATCH /items/:name", function () {
  test("PATCH updates a single items name", async function () {
    const res = await request(app).patch(`/items/${candy.name}`).send({
      name: "Troll",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      name: "Troll",
      price: candy.price,
    });
  });
  test("Responds with 404 if name invalid", async function () {
    const res = await request(app).patch(`/items/giraffe`);
    expect(res.statusCode).toBe(404);
  });
});

describe("DELETE /items/:name", function () {
  test("DELETE a single item", async function () {
    const res = await request(app).delete(`/items/${candy.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "deleted" });
  });
});
