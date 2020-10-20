const mongoose =require('mongoose')


function connect(){
    console.log('db connections')
    console.log(process.env.DB_LOCAL)
    return mongoose.connect(process.env.DB_LOCAL,{
            useNewUrlParser:true,
        }
    )
}
module.exports = connect