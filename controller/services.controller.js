
const Service = require('../model/services.model');


const getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).send({services});
    } catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
}
const createService = async (req, res) => {
    const {name, description} = req.body;
    if(!name){
        return res.status(400).send({message: 'Name is required'});
    }
    try {
        const service = new Service({
            name,
            description,
        });
        await service.save();
        res.status(201).send(service);
    } catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
}
const deleteService = async (req, res) => {
    const {id} = req.params;
    try {
        const service = await Service.findById(id);
        if(!service){
            return res.status(404).send({message: 'Service not found'});
        }
        await service.delete();
        res.status(200).send({message: 'Service deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
}

module.exports = {
    getAllServices,
    createService,
    deleteService,
}