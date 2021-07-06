'use strict';

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/exam', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});






app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});