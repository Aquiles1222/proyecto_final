import React, { useState } from "react";
import '../css/Login.css';
import Title from '../Login/ComponenteLogin/title/Title';
import Label from '../Login/ComponenteLogin/label/Label';
import Input from '../Login/ComponenteLogin/input/Input';




const Login = () => {   

    const [ user, setUser ] = useState (""); 
    const [ password, setPassword ] = useState ("");


    function handleChange (name, value){
        if (name === "mail"){
            //variable use para guardar
            setUser (value)
        }
        else {
            setPassword(value)
        }
    };

    function handleSubmit(){
        let account = { user, password }

        if(account){
            console.log("account",account)
        }
    };

    return (
        <div className="login-container">
            <Title text='🍔  Inicio de Sesión 🍔'/>
            <Label text= 'Mail'/>
            <Input 
            attribute = {{
                id:"mail",
                name: "mail",
                type: "text",
                placeholder: "Ingrese su mail"
            }}  
            handleChange ={handleChange}
            />
            <Label text= 'Contraseña'/>
            <Input 
            attribute = {{
                id:"contraseña",
                name: "contraseña",
                type: "password",
                placeholder: "Ingrese su contraseña"
            }}            
            handleChange ={handleChange}
            />
            <button  onClick={handleSubmit} className="btn btn-danger"> Ingresar</button>

            <br></br>

            <Label text= 'Si no tenes una cuenta, registrate aqui: '/>
        
        
        </div>
    )
};

export default Login;

