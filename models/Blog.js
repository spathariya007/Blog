const {Schema,model}=require("mongoose")
const blogSchema=new Schema({
    title:{
        type:String,
        trim:true,
        require:true
    },
    snippet:{
        type:String,
        trim:true,
        require:true
    },
    description:{
        type:String,
        trim:true,
        require:true
    },
    photo:{
        type:[""],
        default:""
    }
})

module.exports=model("blog",blogSchema)