const mongoose=require('mongoose')

const Schema=mongoose.Schema
const bookMarkSchema=new  Schema({
    title:{
        type:String,
        required:true
    },
    original_url:{
        type:String,
        required:true
    },
    tags:{
        type:[String],
        required:true
    },
    hashed_url:{
        type:String
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})
const BookMark=mongoose.model('BookMark',bookMarkSchema)
module.exports=BookMark