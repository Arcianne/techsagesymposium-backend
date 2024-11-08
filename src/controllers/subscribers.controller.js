class SubscribersController {
    async getAllSubscribers(req, res) {
        try {
            res.status(200).json({
                status: "subscribers"
            })
        } catch (error) {
            
        }
    }
}

module.exports = new SubscribersController()
