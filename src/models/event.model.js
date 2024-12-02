const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const EventSchema = new Schema(
    {
        title: String,
        mode_of_delivery: String,
        attendees: Number,
        speaker: String,
        location: String,
        venue: String,
        duration: String,
        date: Date,
        speaker_information: String,
        event_details: String,
        tags: [String],
        email: String,
        is_pending: Boolean,
        images: {
            event_cover: String,
            speaker_image: String
        },
        registrator: {
            full_name: String,
            email: String,
            contact_number: String,
        }
    },
    {
        timestamps: true,
        collection: "Events",
    }
)

const Event = model('Event', EventSchema);

module.exports = Event;