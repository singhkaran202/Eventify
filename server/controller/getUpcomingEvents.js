const eventModel = require("../model/event.model");

async function getUpcomingEvents(req, res) {
    try {

        const filter = {dt: {$gte: Date.now()}};
        // Retrieve all events from the database
        const events = await eventModel.find(filter);
       

        if (!events) {
            return res.status(404).json({
                message: "No events found",
                error: true,
                success: false
            });
        }

        return res.status(200).json({
            message: "Events retrieved successfully",
            data: events,
            error: false,
            success: true
        });
    } catch (error) {
        console.error("Error retrieving events:", error);
        res.status(500).json({
            message: "Internal server error",
            error: true,
            success: false
        });
    }
}

module.exports = getUpcomingEvents;
