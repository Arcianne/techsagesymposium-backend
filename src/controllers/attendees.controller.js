const mongoose = require("mongoose");
const Attendee = require("../models/attendees.model");

class AttendeesController {
    async fetchAllAttendees(req, res) {
        try {
            const data = await Attendee.find()
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

    async fetchAttendeeById(req, res) {
        const id = req.params.id;
        try {
            const data = await Attendee.findById(id)
            res.status(200).json({
                status: "Successfully Retrieved Attendee",
                data
            })
        } catch (error) {
            res.status(404).json({
                status: "Failed to Retrieve Data",
                error
            })
        }
    }

    async fetchAttendeeByPendingStatus(req,res) {
        const pendingStatus = req.params.pending_status;
        const isPending = pendingStatus === 'true';
        try {
            const data = await Attendee.where({ is_pending: isPending })
                .populate({ path: 'event_id', select:['title']})
            res.status(200).json({
                status: "Successfully Retrieved Event",
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

    async registerAttendee(req, res){
        try {
            const registerAttendee = await Attendee.create(req.body)
            res.status(201).json({
                status: "created successfully",
                data: {
                    registerAttendee
                }    
            })
        } catch (error) {
            res.status(422).json({
                message: "Failed to register Attendee",
                error
            })
        }
    }

    async editAttendeeById(req, res){
        const id = req.params.id;
        const updateData = req.body;

        try {
            const updateAttendeeById = await Attendee.findByIdAndUpdate(id, updateData, {
                new: true,
            })
            res.status(200).json({
                status: "Attendee Update Successfully",
                data: updateAttendeeById,
            })
        } catch (error) {
            res.status(404).json({
                status: "Cannot Find Attendee",
                error
            })
        }
    }

    async deleteAttendeeById(req, res){
        const id = req.params.id;

        try {
            const deleteAttendee = await Attendee.findByIdAndDelete(id)

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

module.exports = new AttendeesController()