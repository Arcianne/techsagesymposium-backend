//external dependencies
const express = require("express");
const cors = require("cors");
const colors = require("colors");
const mongoose = require("mongoose");
require("dotenv").config();

// internal dependecies 
const connectDB = require("./config/db")

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit:50000 }));

app.use(cors());

connectDB()

app.use("/api", require("./routes/routes"))

app.listen(process.env.PORT, process.env.IPV4_ADDRESS || '0.0.0.0', () => {
    console.log('Local: ' + `http://localhost:${process.env.PORT}/`.brightGreen.underline)
    console.log('Network: ' + `http://${process.env.IPV4_ADDRESS}:${process.env.PORT}/`.brightGreen.underline)
    console.log("List of Routes")
    console.log(`http://${process.env.IPV4_ADDRESS}:8000/api/v1/events`)
    console.log(`http://${process.env.IPV4_ADDRESS}:8000/api/v1/subscribers`)
    console.log(`http://${process.env.IPV4_ADDRESS}:8000/api/v1/attendees`)
})