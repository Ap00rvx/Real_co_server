const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,

    },
    brochure:{
        type: String,
        required: false,
        default:"",
    },
    image:{
        type: String,
        required: false,
        default:"", 
    },
    description:{
        type: String,
        required: false,
    },
    startDate:{
        type: Date,
        required: true,
        default: Date.now,
    },
    status:{
        type: String,
        required: true,
        default: 'active',
    },
    
},{
    timestamps:true 
}); 

const Project = mongoose.model('Project', projectSchema);
module.exports = Project