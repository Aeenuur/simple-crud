require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");

const app = express();

app.get('/', function (req, res) {
    res.send("Hello from Node API server");
});

// middleware
app.use(express.json());
app.use(express.urlencoded());

// routes
app.use("/api/products", productRoute);

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected to database");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((e) => {
        console.log(e);
    });