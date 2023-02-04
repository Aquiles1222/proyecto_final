const {Router}=require("express");

const router=Router();
const {saveUserController,loginUserController}=require("../controller/userController");




router.post("/users/signup",saveUserController);

router.post("/users/signin",loginUserController);

module.exports= router; 