//external dependencies
const express = require("express");
const cors = require("cors");
const colors = require("colors");
const mongoose = require("mongoose");
require("dotenv").config();

// internal dependecies 
const connectDB = require("./config/db")

const app = express();
app.use(express.json())
app.use(cors());

connectDB()

app.use("/api", require("./routes/routes"))

app.listen(process.env.PORT, () => {
    console.log('Server Started at ' + `http://localhost:${process.env.PORT}/`.brightGreen.underline)
    console.log("List of Routes")
    console.log("http://localhost:8000/api/v1/events")
    console.log("http://localhost:8000/api/v1/subscribers")
} )