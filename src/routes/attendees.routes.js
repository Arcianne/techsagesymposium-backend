const express = require("express");
const AttendeesController = require("../controllers/attendees.controller");
const router = express.Router();

router.get("/", AttendeesController.fetchAllAttendees);
router.get("/pending-status/:pending_status", AttendeesController.fetchAttendeeByPendingStatus);
router.post("/", AttendeesController.registerAttendee);
router.put("/:id", AttendeesController.editAttendeeById);
router.delete("/:id", AttendeesController.deleteAttendeeById);

module.exports = router;