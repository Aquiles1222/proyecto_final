import React, { useState } from "react";
import '../css/Login.css';
import Title from '../Login/ComponenteLogin/title/Title';
import Label from '../Login/ComponenteLogin/label/Label';
import { Link } from 'react-router-dom';
import { login } from "../service/appiCall";


const Login = () => {

    const [formValues, setFormValues] = useState({

        email: "",
        password: "",

    });


    const handleChange = (event) => {
        setFormValues({

            ...formValues,
            [event.target.name]: event.target.value
        })


    }

    const handleSubmit = (event) => {

        event.preventDefault();
        const getUser = () => {
            login(formValues).then(() => {
                alert("Logueado Correctamente");
            })
                .catch((error) => alert("Error al loguear"));
        }
        getUser();
    }


    return (
        <>
            <br></br>
            <br></br>
            <div className="login-container">
                <Title text='🍔  Inicio de Sesión 🍔' />
                <br></br>
                <br></br>
            </div>
            <div className="containerformulario">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                        <label for="email" className="form-label">Email:</label>
                        <input type="email" className="input form-control" id="email" placeholder="Ingrese su email" name="email" value={formValues.email} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="Password" className="form-label">Contraseña:</label>
                        <input type="password" className="input form-control" id="password" placeholder="Ingrese su contraseña" name="password" value={formValues.password} onChange={handleChange} />
                    </div>
                    <button className="btn btn-danger">Ingresar</button>
                </form>
                <div className="Label1">
                    <Label text='Si no tenes una cuenta, registrate aqui: ' />
                </div>
                <div className="Button">
                    <Link type="button" className="btn btn-outline-danger " aria-current="page" to="/Registro">Registrarme</Link>
                </div>
            </div>
        </>

    );
};


export default Login;
