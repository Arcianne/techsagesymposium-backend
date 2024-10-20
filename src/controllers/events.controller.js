class EventsController {
    async getAllEvents(req, res) {
        try {
            res.status(200).json({
                status: "success"
            })
        } catch (error) {
            
        }
    }
}

module.exports = new EventsController()