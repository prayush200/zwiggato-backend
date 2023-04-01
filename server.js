
const app=require('./app')
const express=require('express')

const dotenv=require('dotenv')
const ConnectDatabase = require('./config/database')

const bodyParser=require('body-parser')

ConnectDatabase()

//config
app.use(express.json())
dotenv.config({path:"./config/config.env"})

app.use(bodyParser.urlencoded({extended:false}))


app.listen(process.env.PORT,()=>{
    console.log(`Server is working on port ${process.env.PORT}`);
})

app.get('/',(req,res)=>{
    res.send(`Hello`)
})

if(process.env.NODE_ENV=="production"){
    app.use(express.static("frontend/food/build"))
}