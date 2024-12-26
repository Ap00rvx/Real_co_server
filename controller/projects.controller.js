const Project = require('../model/project.model');

exports.createProject = async (req,res) => {
    const {title, image, description, startDate, status} = req.body;
    if(!title || !startDate){
        return res.status(400).json({message: "Title and Start Date are required"});
    }
    try {
        const newProject = new Project({title, image, description, startDate, status});
        await newProject.save();
        res.status(201).json({message: "Project created successfully",project : newProject});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
