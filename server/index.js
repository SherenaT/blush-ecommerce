const express = require("express");
const path = require("path");
require("dotenv").config();
const massive = require("massive");

const { CONNECTION_STRING, PORT } = process.env;

const app = express();
app.use(express.json());
const products = require("./controller/products");

//endpoints
app.get("/api/items", products.getAllProducts);
app.get("/api/bachelorette", products.bachelorette);
app.get("/api/headbands", products.headbands);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => {
  app.set("db", dbInstance);
  console.log("db connected");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
