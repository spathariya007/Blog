const express=require("express");
const storage=require("../middlewares/multer")
const multer=require("multer")
const { getHome, getList, getAbout, getCreateBlog, createBlog } = require("../controllers/blogControllers");
const upload=multer({storage:storage})

let blogRouter=express.Router()

blogRouter.get("/",getHome)
blogRouter.get("/list",getList)
blogRouter.get("/about",getAbout)
blogRouter.get("/create-blog",getCreateBlog)
blogRouter.post("/create-blog",upload.single("photo"),createBlog)


module.exports=blogRouter;