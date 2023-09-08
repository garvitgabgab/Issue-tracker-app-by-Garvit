const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Author: {
        type: String,
        required: true,
    },
    Issue: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('project', projectSchema);