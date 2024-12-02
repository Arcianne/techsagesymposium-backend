const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SubscriberSchema = new Schema(
    {
        email: String,
    },
    {
        timestamps: true,
        collection: "Subscribers",
    }
)

const Subscriber = model('Subscriber', SubscriberSchema);

module.exports = Subscriber;