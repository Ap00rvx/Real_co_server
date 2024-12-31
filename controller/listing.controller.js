const { model } = require('mongoose');
const Listing  = require('../model/listing.model');

const createListing = async (req, res) => {
    const { title, description, images , contact } = req.body;
    if (!title || !contact) {
        return res.status(400).json({ message: "Contact & Title is required" });
    }
    try {
        const listing = new Listing({
            title,
            description,
            images,
            contact
        });
        await listing.save();
        res.status(201).json({ message: "Listing created successfully", listing });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const updateListings   = async (req, res) => {
    const { id } = req.params;
    const { visible,title,description,contact, images} = req.body;
    try {
        const listing = await Listing.findById(id);
        if (!listing) {
            return res.status(404).json({ message: "Listing not found" });
        }
        listing.visible = visible || listing.visible;
        listing.title = title || listing.title;
        listing.description = description || listing.description;
        listing.contact = contact || listing.contact;
        listing.images = images || listing.images;
        await listing.save();
        res.status(200).json({ message: "Listing updated successfully", listing });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }


}

const deleteListing = async (req, res) => {
    const { id } = req.params;
    try {
        const listing = await Listing.findById(id);
        if (!listing) {
            return res.status(404).json({ message: "Listing not found" });
        }
        await listing.deleteOne();
        res.status(200).json({ message: "Listing deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getListing = async (req, res) => {
    try {
        const listings = await Listing.find();
        res.status(200).json({ listings });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const getVisibleListing = async (req, res) => {
    try {
        const listings = await Listing.find({ visible: true });
        res.status(200).json({ listings });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {createListing, updateListings, deleteListing, getListing, getVisibleListing};