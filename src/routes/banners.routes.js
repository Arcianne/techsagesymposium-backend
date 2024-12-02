const express = require("express");
const BannerController = require("../controllers/banner.controller");
const router = express.Router();

router.get("/", BannerController.getAllBanners)
router.get("/event-id/:event_id", BannerController.getBannerByEventId)
router.post("/", BannerController.createBanner)

module.exports = router;