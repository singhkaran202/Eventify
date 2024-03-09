const eventModel = require("../model/event.model")
// const bcryptjs = require('bcryptjs');

async function planEvent(req,res){
    try{

        if(!req.body.eventName){
            return res.status(400).json({
                message : "Please provide a name for event",
                error : true,
                success : false
            })
        }

        if(!req.body.eventType){
            return res.status(400).json({
                message : "Please select the event type",
                error : true,
                success : false
            })
        }

        if(!req.body.date){
            return res.status(400).json({
                message : "Please provide date for event",
                error : true,
                success : false
            })
        }
        if(!req.body.time){
            return res.status(400).json({
                message : "Please provide time for event",
                error : true,
                success : false
            })
        }
        if(!req.body.venue){
            return res.status(400).json({
                message : "Please provide venue for event",
                error : true,
                success : false
            })
        }
        
        // if(!req.body.ticketPrice){
        //     return res.status(400).json({
        //         message : "Please provide ticket price for event",
        //         error : true,
        //         success : false
        //     })
        // }
        if(!req.body.ticketType){
            return res.status(400).json({
                message : "Please select ticket type for event",
                error : true,
                success : false
            })
        }
        if(!req.body.emailText){
            return res.status(400).json({
                message : "Please provide text to sent via email for event",
                error : true,
                success : false
            })
        }

        if(!req.body.description){
            return res.status(400).json({
                message : "Please provide description for event",
                error : true,
                success : false
            })
        }


        const event = await eventModel.findOne({eventName : req.body.eventName})

        if(event){
            return res.status(400).json({
                message : "Already event exits",
                error : true,
                success : false
            })
        }
        const payload = {
            ...req.body
        }

        const eventDetails = new eventModel(payload)
        const save = await eventDetails.save()

        return res.status(200).json({
            message : "Event Created successfully",
            data : save,
            error : false,
            success : true
        })



    }catch(error){
        res.status(500).json({
            message : error,
            error : true,
            success : false
        })
    }
}


module.exports = planEvent