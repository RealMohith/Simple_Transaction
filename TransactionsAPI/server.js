const express = require('express');
const cors = require('cors')
require('dotenv').config({
    path : '../.env'
})

const {authorizejwt} = require('./middlewares/authjwt') 
const  apirouter = require('./routers/api/v1/index')

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json())
//app.use(express.urlencoded({extended: true}))
app.use('/api/v1',apirouter)


app.get('/',authorizejwt,(req,res)=>{
    console.log(req.user);
    res.send(`welcome user ${req.user.name}`);
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
