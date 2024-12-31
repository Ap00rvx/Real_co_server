const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        default : ""
    },
    contact: {
        type: String,
        required: true
    },
    images:{
        type: Array,
        default : []
    },
    visible:{
        type: Boolean,
        default : false
    },
},{
    timestamps: true
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;