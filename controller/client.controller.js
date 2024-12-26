const Client = require('../model/client.model');

exports.createClient = async (req,res) => {
    const {name , email , status, image } = req.body;
    if(!name){
        return res.status(400).json({message: "Name are required"});
    }
    try {
        const newClient = new Client({name, email, status, image});
        await newClient.save();
        res.status(201).json({message: "Client created successfully",client : newClient});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}