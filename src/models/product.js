import mongoose from 'mongoose';
  const { Schema } = mongoose;

  const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: Number,
    description:  String,
    category:String,
  });