require("./database");
const app=require("./app");


const main= ()=>{

app.listen(8000, ()=>console.log("App iniciada en el puerto 8000"));


}

main();