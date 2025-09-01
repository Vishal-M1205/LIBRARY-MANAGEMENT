import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
title:{
    type:String,
    required:true
},
author:{
    type:String,
    required:true
},
publishYear:{
    type:Number,
    required:true
},
desc:{
    type:String,
    required:true
}
},{
    timestamps:true
})

const loginSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export const Book = mongoose.model('Book',bookSchema)
export const Login = mongoose.model('Login',loginSchema);