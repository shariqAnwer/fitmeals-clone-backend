
const express = require("express");
require("dotenv").config();

const connect = require("./connect/mongoose")
const app = express();
app.use(express.json())
const cors = require("cors");

const productcontroller = require("./controller/productcontroller.js");
// const regeistercontroller = require("./controller/regeistercontroller.js");
const logincontroller = require("./controller/logincontroller.js")





app.use(cors());
// app.use("/regeister", regeistercontroller);
app.use("/login", logincontroller)

console.log("Connected to backend")


app.use("", productcontroller);







app.listen(process.env.PORT || 5500, async function () {
    try {
        await connect();
        console.log("app is listening on port 5500");
    } catch (err) {
        console.log(err.message);
    }
});