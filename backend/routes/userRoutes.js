const express=require("express");

const router=express.Router();

const upload=require("../middleware/upload");

const {

uploadProfile,

}=require("../controllers/userController");

router.put(

"/upload/:id",

upload.single("image"),

uploadProfile

);

module.exports=router;