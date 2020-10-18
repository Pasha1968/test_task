const express = require('express');
const mongoose =require('mongoose')
const app = express();
const appRoutes = require('./routes/main')


app.use(appRoutes)

async function start(){
    try{
        await mongoose.connect('mongodb://localhost:27017',{
        useNewUrlParser:true,
        useFindAndModify:false,
        
    })
    app.listen(3000,function(){
        console.log('started on 3000')
    })
    }catch(e){
        console.log(e)
    }
}

start()