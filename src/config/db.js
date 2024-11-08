const mongoose = require("mongoose");
require("dotenv").config();

const DB = process.env.MONGO_URL;

const connectDB = async () => {
    mongoose
        .connect(DB)
        .then(() => {
            console.log("Connected to database")
        })
        .catch((error) => console.log(error))
}

module.exports = connectDB;
