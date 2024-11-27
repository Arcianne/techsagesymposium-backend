const express = require("express");
const AttendeesController = require("../controllers/attendees.controller");
const router = express.Router();

router.get("/", AttendeesController.fetchAllAttendees)
router.post("/", AttendeesController.registerAttendee)
router.get("/pending-status/:pending_status", AttendeesController.fetchAttendeeByPendingStatus)
module.exports = router;