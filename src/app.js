const express = require('express');
const mongoose =require('mongoose')
const app = express();


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

// app.get('/',function(req,res){
//    // res.end('test1');
//     res.send({
//         msg:'hello my dear friend'
//     })
// })