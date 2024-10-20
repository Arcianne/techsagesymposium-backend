const express = require("express");
const app = express();
const router = express.Router();

router.use("/v1/events", require("./events.routes.js"))

module.exports = router; 