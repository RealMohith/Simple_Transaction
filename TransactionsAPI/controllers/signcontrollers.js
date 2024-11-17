const {PushUser,FindUser,FindUsers} = require('../models/UsersDB')

require('dotenv').config()
const jwt = require('jsonwebtoken');


const login = async(req,res)=>{
    const found = await FindUser(req.body);
    if(found){
        const jwttoken = jwt.sign({name :`${found.name}` , userid : `${found._id}`},process.env.JWT_SECRET)
        res.status(201).json({message:'user logged in succesfully' , token: jwttoken})
    }
    else{
        res.status(404).json({message:'user not found'})
        }
};

const signup = async(req,res)=>{
    const found = await FindUser(req.body)
    if(!found){
        await PushUser(req.body);
        fetch('http://localhost:3000/api/v1/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(req.body)
        }).then((r)=>{
            return r.json();
        }).then((data)=>{
            res.status(201).json({
                message: `user created succesfully + ${data.message}`,
                token: data.token
            })
        })
    }
    else{
        res.status(400).json({message: "Username already exists"});
        }
    
};

const userslist =async(req,res)=>{
    //list all users in db
    // data is req.body.name
    const listofUsers = await FindUsers(req.user.name);
    res.status(200).json(listofUsers);
};


module.exports = {signup , login , userslist};