if(process.env.NODE_ENV!=="production"){
    require("dotenv").config()
}
const express=require("express")
const mongoose=require("mongoose")
const blogRouter=require("./routes/blogRoutes")
let app=express()
let PORT=process.env.PORT

//register template engine
app.set("view engine","ejs")

//db 
async function db(){
    await mongoose.connect(process.env.MONGODB_URI) 
    console.log("db connected");
}
db()
//in built middlewares
app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))

app.use("/blog",blogRouter)

app.listen(PORT,()=>{
    console.log(`server is runnning ${PORT}`);
})