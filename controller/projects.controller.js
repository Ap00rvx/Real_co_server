const Project = require('../model/project.model');

exports.createProject = async (req,res) => {
    const {title, image, description, startDate, status,brochure} = req.body;
    if(!title || !startDate){
        return res.status(400).json({message: "Title and Start Date are required"});
    }
    try {
        const newProject = new Project({title, image, description, startDate, status ,brochure});
        await newProject.save();
        res.status(201).json({message: "Project created successfully",project : newProject});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
exports.getAllProjects = async (req,res) => {
    try {
        const projects = await Project.find();
        res.status(200).json({projects});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.getProject = async (req,res) => {
    const {id} = req.params;
    try {
        const project = await Project.findById(id);
        if(!project){
            return res.status(404).json({message: "Project not found"});
        }
        res.status(200).json({project});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
exports.deleteProject = async (req,res) => {
    const {id} = req.params;
    try {
        const project = await Project.findById(id);
        if(!project){
            return res.status(404).json({message: "Project not found"});
        }
        await project.deleteOne();
        res.status(200).json({message: "Project deleted", project});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.updateProject = async (req,res) => {
    const {id} = req.params;
    const {title, image, description, startDate, status,brochure} = req.body;
    if(!id){
        return res.status(400).json({message: "Project ID is required"});
    }
    try {
        const project = await Project.findById(id);
        if(!project){
            return res.status(404).json({message: "Project not found"});
        }
        if(!project){
            return res.status(404).json({message: "Project not found"});
        }
        project.image = image || project.image;
        project.description = description || project.description;
        project.startDate = startDate || project.startDate;
        project.status = status || project.status;
        project.title = title || project.title;
        project.brochure = brochure || project.brochure;


        await project.save();
        res.status(200).json({message: "Project updated successfully", project});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}