const mongoose = require("mongoose");
const Event = require("../models/event.model");

class EventsController {
    async fetchAllEvents(req, res) {
        try {
            const data = await Event.find()
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

    async registerEvent(req, res){
        try {
            const registerEvent = await Event.create(req.body)
            res.status(201).json({
                status: "created successfully",
                data: {
                    registerEvent
                }    
            })
        } catch (error) {
            res.status(422).json({
                message: "Failed to register Events",
                error
            })
        }
    }

    async editEvent(req, res){
        const id = req.params.id;
        const updateData = req.body;

        try {
            const updateEvent = await Event.findByIdAndUpdate(id, updateData, {
                new: true,
            })
            res.status(200).json({
                status: "Event Update Successfully",
                data: updateEvent,
            })
        } catch (error) {
            res.status(404).json({
                status: "Cannot Find Event",
                error
            })
        }
    }

    async deleteEvent(req, res){
        const id = req.params.id;

        try {
            const deleteEvent = await Event.findByIdAndDelete(id)

            res.status(200).json({
                status: "Deleted Successfully",
            })
        } catch (error) {
            res.status(404).json({
                status: "Cannot Find Event",
                error
            })
        }
    }
}

module.exports = new EventsController()