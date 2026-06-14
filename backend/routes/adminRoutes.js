const express=require("express");

const router=express.Router();

const{

getUsers,
deleteUser,
blockUser

}=require("../controllers/adminController");

router.get("/users",getUsers);

router.delete("/user/:id",deleteUser);

router.put("/block/:id",blockUser);

module.exports=router;