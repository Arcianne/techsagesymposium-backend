const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const AttendeeSchema = new Schema(
    {
        attendee_name: String,
        contact_no: String,
        email: String,
        event_id: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Event'
        },
        is_pending: Boolean
    }
)

const Attendee = model('Attendee', AttendeeSchema);

module.exports = Attendee;