const express = require("express");
const SubscribersController = require("../controllers/subscribers.controller");
const router = express.Router();

router.get("/", SubscribersController.getAllSubscribers)

module.exports = router;