const mongoose = require("mongoose");
const url="mongodb://127.0.0.1/userApp";



mongoose.connect(url);


const connection=mongoose.connection;

connection.once("open",()=>{
console.log("BD conectada");


})