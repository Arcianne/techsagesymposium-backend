const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const EventSchema = new Schema(
    {
        title: String,
        attendees: Number,
        speaker: String,
        location: String,
        venue: String,
        duration: String,
        date: Date,
    },
    {
        timestamps: true,
        collection: "Events",
    }
)

const Event = model('Event', EventSchema);

module.exports = Event;