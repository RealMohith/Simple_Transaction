
const { response } = require('express');
const {db} = require('../config/mongoDB');

const {ObjectId} = require('mongodb');
const UserModel = db.model(
    'User',
    {
        name: String,
        email: String
    }
)

const AccountModel = db.model(
    'Account',
    {
        userid : ObjectId,
        Balance : Number
    }
)


/*creating account of that user with userid and balance
const PushUser = async (data)=>{

    return await UserModel.create(
        {
            name: data.name,
            email: data.email
        }
    ) 
}*/

const PushUser = async (data)=>{
    const user = await UserModel.create({
        name: data.name,
        email: data.email
    })
    const account = await AccountModel.create({userid:user._id, Balance:0})
    return user
}

const FindUser = async (data)=>{
    return await UserModel.findOne({
        name: data.name,
        //email: data.email
    })

}

const FindUsers = async (data)=>{
    const arr = await UserModel.find({name:{$ne:`${data}`}})
    return arr.map(
        (item)=>{
            return ({name : item.name , id :  item._id});
        }
    )
}


const GetBalance = async(id)=>{
    return await AccountModel.findOne({
        userid:id
    })
}
const UpdateBalance = async(sender , friend , amount)=>{
    const amt = parseInt(amount);
    var senderBalance = await GetBalance(sender)
    var friendBalance = await GetBalance(friend)
    if(senderBalance.Balance >= amt){
        senderBalance.Balance -= amt
        friendBalance.Balance += amt
        await senderBalance.save()
        await friendBalance.save()
        return senderBalance;
    }
    else{
        return -1;
    }
    
}

module.exports = {PushUser,FindUser,FindUsers,UpdateBalance,GetBalance}