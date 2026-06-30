const User = require("../models/User");

exports.uploadProfile = async (req,res)=>{

    try{

        const userId=req.params.id;

        const image=req.file.filename;

        const user=await User.findByIdAndUpdate(

            userId,

            {
                profileImage:image,
            },

            {
                new:true,
            }

        );

        res.json(user);

    }

    catch(error){

        res.status(500).json({
            message:error.message,
        });

    }

};