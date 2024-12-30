const User  = require('../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();  

const  getUser= async (req,res) => {
    try {
        const users = await User.find();
        res.status(200).send({users: users.map(user=>({username: user.username, role: user.role}))});

    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
}
const createUser = async(req,res)=>{
        const {username, password, role} = req.body;
        const user  = req.user;
    if(user.role !== 'admin'){
        return res.status(403).send('Forbidden');
    }
        if(!username || !password){
            return res.status(400).send({message:'Username and Password are required'});
        }
        if(role !== 'admin' && role !== 'user'){
            return res.status(400).send({message:'Invalid role'});}
        try {
            const user = new User({
                username,
                password,
                role,
            });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();
            res.status(201).send(user);
        } catch (error) {
            print(error);
            res.status(500).send({message: error.message});
        }

}

const login = async(req,res)=>{
    const {username, password} = req.body;
    try {
        const user = await User.findOne({username});
        if(!user){
            return res.status(404).send({"message":'User not found'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).send({"message":'Invalid credentials'});
        }
        const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).send({id:user._id, token, role: user.role});

    }
    catch (error) {
        res.status(500).send({error: error.message});
    }
}
const deleteUser = async(req,res) =>{
    const {username} = req.params;
    const user  = req.user;
    if(user.role !== 'admin'){
        return res.status(403).send('Forbidden');
    }
    try {
        const user = await User.findOneAndDelete({username});
        if(!user){
            return res.status(404).send('User not found');
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
    
}

const changePassword = async(req,res) =>{
    const {username, password} = req.body;
    const user = req.user;
    if(user.role !== 'admin' && user.username !== username){
        return res.status(403).send('Forbidden');
    }
    try {
        const user = await User.findOne({username});
        if(!user){
            return res.status(404).send('User not found');
        }
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        res.status(200).send({message: 'Password changed successfully', user: {username: user.username, role: user.role}});
    } catch (error) {
        res.status(500).send(error);
    }

};



module.exports = {
    createUser,
    login,
    deleteUser,
    getUser,
    changePassword
}






///apurvx
//apurvx