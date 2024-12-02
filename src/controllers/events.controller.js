const mongoose = require("mongoose");
const Event = require("../models/event.model");
const { uploadImageToCloudinary } = require("../services/events.service")

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

    async fetchEventById(req, res) {
        const id = req.params.id;
        try {
            const data = await Event.findById(id)
            res.status(200).json({
                status: "Successfully Retrieved Event",
                data
            })
        } catch (error) {
            res.status(404).json({
                status: "Failed to Retrieve Data",
                error
            })
        }
    }

    async fetchEventsByPendingStatus(req,res) {
        const pendingStatus = req.params.pending_status;
        const isPending = pendingStatus === 'true';
        try {
            const data = await Event.where({is_pending: isPending})
            res.status(200).json({
                status: "Successfully Retrieved Event",
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
            const { 
                title, 
                attendees, 
                speaker, 
                location, 
                venue, 
                duration, 
                date, 
                email, 
                is_pending,
                images,
                speaker_information,
                event_details,
                registrator,
            } = req.body;

            const eventCoverUrl = await uploadImageToCloudinary(images.event_cover)
            const speakerImageUrl = await uploadImageToCloudinary(images.speaker_image)

            const registerEvent = await Event.create({
                title, 
                attendees, 
                speaker, 
                location, 
                venue, 
                duration, 
                date, 
                email, 
                is_pending,
                speaker_information,
                event_details,
                images: {
                    event_cover: eventCoverUrl,
                    speaker_image: speakerImageUrl
                },
                registrator: {
                    full_name: registrator.full_name,
                    email: registrator.email,
                    contact_number: registrator.contact_number,
                }
            })
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