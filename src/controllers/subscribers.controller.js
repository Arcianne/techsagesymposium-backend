const Subscriber = require("../models/subscriber.model")

class SubscribersController {
    async getAllSubscribers(req, res) {
        try {
            const data = await Subscriber.find()

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

    async registerSubscriber(req, res) {
        try {
            const registerSubscriber = await Subscriber.create(req.body)

            res.status(201).json({
                status: "created successfully",
                data: {
                    registerSubscriber
                }    
            })
        } catch (error) {
            res.status(422).json({
                message: "Failed to register Subscriber",
                error
            })
        }
    }
}

module.exports = new SubscribersController()
