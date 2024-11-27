const express = require("express");
const app = express();
const router = express.Router();

router.use("/v1/events", require("./events.routes.js"))
router.use("/v1/subscribers", require("./subscribers.routes.js"))
router.use("/v1/attendees", require("./attendees.routes.js"))

module.exports = router; 