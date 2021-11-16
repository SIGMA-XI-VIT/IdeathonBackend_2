const mongoose = require('mongoose')

const registrationSchema = new mongoose.Schema({
    
    team_name: {
        type: String,
        required: true,
        unique: true
    },
    name1: {
        type: String,
        required: true
    },
    name2: {
        type: String
    },
    name3: {
        type: String
    },
    name4: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneno: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Registration', registrationSchema)
