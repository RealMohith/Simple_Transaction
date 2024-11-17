const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGODB_STRING)

const db = mongoose.connection

db.on(
    'error',
    (err)=>{
        console.error(err)
    }
)

db.on(
    'open',
    ()=>{
        console.log('Connected to MongoDB')
    }
)

module.exports = {db};