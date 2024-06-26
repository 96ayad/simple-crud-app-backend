const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const Liquidity = require("./models/liquidity.model.js");
const liquidityRoute = require("./routes/liquidity.route.js");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);

app.use("/api/liquiditys", liquidityRoute);

app.use("/v2/sdk/liquidity/mint", liquidityRoute);

///////////ayad//////////
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }
  next();
});


app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(

    ////////////////ayad////////////////////
    // "mongodb+srv://haris2iftikhar:GClTzr15XhkjvN6k@backenddb.nrurtot.mongodb.net/Node-API?retryWrites=true&w=majority"

    "mongodb+srv://ayadalig:21348457@node-rest-shop.31y2z0q.mongodb.net/Node-API?retryWrites=true&w=majority&appName=node-rest-shop"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
