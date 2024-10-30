const User = require('../models/User');

// 1. create user
const createUser = async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        const newUser = new User({name,email,password});
        await newUser.save();
        res.status(201).json(newUser);
    }catch(err){
        res.status(400).json({message:'Error creating user',err});
    }
};

// 2. get user id
const getUserById = async (req,res) =>{
    try{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({message: 'user not found'});
        res.json(user);
    }catch(err){
        res.status(400).json({message:'Error fetching user',err});
    }
}

// 3.update user by id

const updateUser = async(req,res)=>{
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body,{new:true});
    if(!updateUser) return res.status(404).json({message: 'user not found'});
    res.json(updateUser);
    }catch(err){
        res.status(400).json({message: 'Error updating user',err});
    }
}

// 4.delete user by id

const deleteUser = async (req,res) =>{
    try{
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if(!deleteUser) return res.status(404).json({ message:'User not found'});
        res.json({message: 'User deleted successfully'});
    }catch(err){
        res.status(400).json({message:'Error delete user',error});
    }
};

// 5.get all user *** don't forget closed 
const getUserAll =async(req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.status(400).json({message:'Error fetching all Books',err});
    }
}

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getUserAll,
};