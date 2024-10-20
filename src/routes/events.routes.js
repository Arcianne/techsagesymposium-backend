const express = require("express");
const EventsController = require("../controllers/events.controller");
const router = express.Router();

router.get("/", EventsController.getAllEvents)

module.exports = router;