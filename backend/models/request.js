const mongoose = require("mongoose")

const requestSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
    },
    appointment_to: {
        type : String
    },
    contact: {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true
    },
    date: {
        type: Date,
        required : true
    },
    status:{
        type: String,
        enum:["Pending","Approved","Reject"],
        default: "Pending"
    },
    purpose: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    response_from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin"
    }
})

module.exports = mongoose.model("Request", requestSchema);