const express = require("express");
const SubscribersController = require("../controllers/subscribers.controller");
const router = express.Router();

router.get("/", SubscribersController.getAllSubscribers)
router.post("/", SubscribersController.registerSubscriber)

module.exports = router;