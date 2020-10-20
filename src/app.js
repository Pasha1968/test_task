const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const appRoutes = require('./routes/')
var catalogRouter = require('./routes/catalog');
const dotenv = require('dotenv').config();
const connection = require('./db')

app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
app.use(appRoutes)
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