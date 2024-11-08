const express = require("express");
const EventsController = require("../controllers/events.controller");
const router = express.Router();

router.get("/", EventsController.fetchAllEvents)
router.post("/",EventsController.registerEvent)
router.put("/:id",EventsController.editEvent)
router.delete("/:id",EventsController.deleteEvent)

module.exports = router;