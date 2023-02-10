const {saveUserService,loginUserService}=require("../service/userService");


const saveUserController=async(req,res)=>{
const {email,password,firstname}=req.body;

const response = await saveUserService(email,password,firstname);
res.json({response:response});

}


const loginUserController=async(req,res)=>{
const {email,password}=req.body;
const response=await loginUserService(email,password);

if(response !== ""){

    res.json({firstname:response})
}else{

res.status(404).json({error:"error not found"}); 

}



}



module.exports={saveUserController,loginUserController};