const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    dt:{
        type:Number
    },
    eventName : {
        type : String,
        required : true,
        unique: true,
        trim : true
    },
    eventType : {
        type : String,
        required : true,
        trim : true
    },
    date : {
        type : String,
        required : true,
        trim : true
    },
    time : {
        type : String,
        required : true,
        trim : true
    },
    venue : {
        type : String,
        required : true,
        trim : true
    },
    ticketPrice : {
        type : String,
        required : true,
        trim : true
    },
    ticketType : {
        type : String,
        required : true,
        trim : true
    },
    emailText : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
},{
    timestamps : true
})

const eventModel = mongoose.model("event",eventSchema)

module.exports = eventModel