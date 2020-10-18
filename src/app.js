const express = require('express');
const bodyParser = require('body-parser')
const mongoose =require('mongoose')
const app = express();
const appRoutes = require('./routes')
const connection = require('./db')

app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
// app.use(express.json());
app.use(appRoutes)

async function start(){
    try{
        await connection()
    app.listen(3000,function(){
        console.log('started on 3000')
    })
    }catch(e){
        console.log(e)
    }
}

start()