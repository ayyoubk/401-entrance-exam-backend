"use strict";

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
const {
  addTofav,
  getFav,
  deleteFav,
  updateFav,
} = require("./controllers/favDrinks.ctrl");

mongoose.connect("mongodb://localhost:27017/exam", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.get("/", (req, res) => {
  res.send("Hello to my Server !!");
});
app.post("/fav", addTofav);
app.get("/fav", getFav);
app.delete("/fav/:id", deleteFav);
app.put("/fav/", updateFav);


app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
