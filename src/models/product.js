const mongoose =require('mongoose')
const { Schema,model } = mongoose;

  const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: Number,
    description:  String,
    category:String,
    units:Number,
  });

module.exports = model('Product', productSchema)