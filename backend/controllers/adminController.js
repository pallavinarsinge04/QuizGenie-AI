const User=require("../models/User");

exports.getUsers=async(req,res)=>{

const users=await User.find();

res.json(users);

}

exports.deleteUser=async(req,res)=>{

await User.findByIdAndDelete(req.params.id);

res.json({
message:"User Deleted"
});

}

exports.blockUser=async(req,res)=>{

await User.findByIdAndUpdate(req.params.id,{

status:"blocked"

});

res.json({

message:"User Blocked"

});

}