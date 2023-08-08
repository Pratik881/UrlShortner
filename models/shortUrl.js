const mongoose=require('mongoose')
const shortId=require('shortid')
const shortUrlSchema=new mongoose.Schema({
    full:{
        type:String,
        required: true,
    },
    short:{
        type: String,
        required:true,
        default: ()=>shortId.generate()

    }
    ,
    clicks:{
        type:Number,
        default:0,
        required:true,
    }
})
module.exports=mongoose.model('shortUrl',shortUrlSchema)