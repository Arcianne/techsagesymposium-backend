const mongoose = require("mongoose");
const Banner = require("../models/banner.model.js");

class BannerController {
    async getAllBanners(req, res) {
        try {
            const data = await Banner.find()

            res.status(200).json({
                status: "Successfully Retrieved Data",
                results: data.length,
                data
            })
        } catch (error) {
            res.status(404).json({
                status: "Failed to Retrieve Data",
                error
            })
        }
    }

    async getBannerByEventId(req, res) {
        try {
            const data = await Banner.find({ event: req.params.event_id })

            res.status(200).json({
                status: "Successfully Retrieved Data",
                data
            })
        } catch (error) {
            res.status(404).json({
                status: "Failed to Retrieve Data",
                error: error.message
            })
        }
    }
    
    async createBanner(req, res) {
        try {
            const createBanner = await Banner.create(req.body)

            res.status(201).json({
                status: "created successfully",
                data: {
                    createBanner
                }    
            })
        } catch (error) {   
            res.status(422).json({
                message: "Failed to create Banner",
                error
            })
        }
    }
}

module.exports = new BannerController()