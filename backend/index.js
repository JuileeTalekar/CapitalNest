require("dotenv").config();
let { HoldingsModel } = require("./model/HoldingsModel");
let{PositionsModel}= require ("./model/PositionsModel");
let { OrdersModel } = require("./model/OrdersModel");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
const port = process.env.PORT || 3002;
const url = process.env.MONGO_URL;


app.use(cors());
app.use(bodyParser.json());



mongoose
  .connect(url)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get(`/allHoldings`, async (req, res) => {
  // let { userId } = req.params;
  let allHoldings = await HoldingsModel.find();
  res.json(allHoldings);
});

app.get(`/allPositions`, async (req, res) => {
  let allPositions = await PositionsModel.find();
  res.json(allPositions);
});

app.post(`/newOrder`, async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.json(newOrder);
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
