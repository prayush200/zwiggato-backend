
const express=require("express")

//Routes

const  UserRoutes=require('./routes/UserRoutes')
const DisplayData=require('./routes/DisplayData')
const FoodRoutes=require('./routes/FoodRoutes')
const OrderData=require('./routes/OrderRoutes')
const app=express();




app.use((req,res,next)=>{
    res.setHeader("Access-control-Allow-Origin","prayushfooddeliveryapp.netlify.app");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json())
app.use('/api',UserRoutes)

app.use('/api',DisplayData)

app.use('/api',FoodRoutes)

app.use('/api',OrderData)





module.exports=app