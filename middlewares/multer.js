const multer=require("multer")

let storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/uploads")
    },
    filename:function(req, file, cb){
        cb(null,file.originalname)
    }
})

module.exports=storage;