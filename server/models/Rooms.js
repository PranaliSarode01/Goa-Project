const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    room_name: {
        type: String,
        required: true
    },
    check_in: {
        type: Date,
        required: false
    },
    check_out: {
        type: Date,
        required: false
    },
    about_room: {
        type: String,
        required: false
    },
    members: {
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('goa', UserSchema)