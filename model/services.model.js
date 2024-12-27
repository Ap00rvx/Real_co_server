const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image:{
        type: String,
        default: "", 
        
    }


},{timestamps: true});

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;