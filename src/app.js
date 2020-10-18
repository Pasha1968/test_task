const express = require('express');
const bodyParser = require('body-parser')
// const mongoose =require('mongoose')
const app = express();
const appRoutes = require('./routes/')
const indexRouter = require('./routes/index');
var catalogRouter = require('./routes/catalog');
const connection = require('./db')

app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
// app.use(express.json());
app.use(appRoutes)
app.use('/', indexRouter);
app.use('/catalog', catalogRouter);

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