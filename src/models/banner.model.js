const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BannerSchema = new Schema(
    {
        banner_heading: String,
        banner_promotional_text: String,
        event: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Event'
        },
    },
    {
        timestamps: true,
        collection: "Banners",
    }
)

const Banner = model('Banner', BannerSchema);

module.exports = Banner;