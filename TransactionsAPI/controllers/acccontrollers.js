const {UpdateBalance,GetBalance,FindUser,FindUsers} = require('../models/UsersDB')

const sendmoney = async(req,res)=>{
    const {friendname , amount} = req.params

    const friend = await FindUser({name:friendname});
    if(!friend){
        return res.status(404).json({message:'friend not found'})
    }
    if(amount <= 0 ){
        return res.status(400).json({message:'Invalid amount'})
    }

    const Balance1 = await UpdateBalance(req.user.userid , friend._id , amount)
    if(Balance1.Balance>-1){
        res.json({message : `the amount is sent`, userbalance : Balance1.Balance})
    }
    else{
        res.status(400).json({message : 'insufficient balance'})
        }
}

const balance = async(req,res)=>{
    const id = req.user.userid
    const bal = await GetBalance(id);
    res.status(200).json({user : req.user.name , Balance : bal.Balance});
}
module.exports = {sendmoney , balance}