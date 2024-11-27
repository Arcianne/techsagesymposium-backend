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
        speaker_desc: String,
        event_detail: String,
        tags: String,
        email: String,
        is_pending: Boolean
    },
    {
        timestamps: true,
        collection: "Events",
    }
)

const Event = model('Event', EventSchema);

module.exports = Event;