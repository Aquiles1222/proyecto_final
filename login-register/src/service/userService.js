const User = require("../model/user")
const crypto=require("crypto");
//const bcryptjs=require("bcryptjs");


const saveUserService = async (email,password,firstname) => {


    
    
    try {
        const id = crypto.randomUUID();
        
        
        
        await User.create({

            id,
            email,
            password,
            firstname




        });
        return true;


    } catch (error) {
        return false;


    }




}



const loginUserService = async (email,password) => {
    try{

const user=await User.findOne({email:email}).select("-_id").select("-__v").select("-id");

if(user.password===password){
    return user.firstname;
}else{
    return "";
}


    }catch(error){
return "";

    }
}

module.exports={saveUserService,loginUserService};