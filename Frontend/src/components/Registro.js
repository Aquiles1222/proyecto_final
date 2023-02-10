import React from "react";
import IconoBurguer from "../img/IconoBurguer.jpg";
import "../css/Registro.css";
import { useState } from "react";
import { register } from "../service/appiCall";

const Registro = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        firstname: "",
    });

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const saveUser = () => {
            register(formValues)
                .then(() => {
                    alert("Registrado correctamente");
                })
                .catch((error) => alert("Error al registrar"));
        };
        saveUser();
    };

    return (
        <main className="main">
            <section className="containerRegistro1 .col-5 .col-lg-12">
                <div>
                    <a className="navbar-brand" href="/Contacto">
                        <img
                            src={IconoBurguer}
                            alt="..."
                            width="30"
                            height="24"
                            className="d-inline-block align-text-top"
                        />
                    </a>
                    <h1>Registro BP</h1>
                    <br></br>
                    <br></br>
                </div>
                <div className="h3">
                    <h3>*Obligatorio</h3>
                </div>
            </section>
            <section className="containerRegistro2">
                <div className="clase">
                    <br></br>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-3">
                            <label for="email" className="form-label">
                                Email:
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Registre su email   Ej: example@gmail.com"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label for="Password" className="form-label">
                            Contraseña:
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Registre su contraseña"
                                name="password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label for="Firstname" className="form-label">
                                Nombre Completo:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstname"
                                placeholder="Ingrese su nombre completo"
                                name="firstname"
                                value={formValues.firstname}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="btn btn-danger">Registrar</button>
                        
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Registro;
