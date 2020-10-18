const mongoose =require('mongoose')

function connect(){
    mongoose.connect('mongodb://localhost:27017/shop',{
    // mongoose.connect('mongodb+srv://root:root@cluster0.d33er.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useFindAndModify:false,
})
}
module.exports = connect