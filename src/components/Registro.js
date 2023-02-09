import React from "react";
import IconoBurguer from "../img/IconoBurguer.jpg";
import Input from "../Login/ComponenteLogin/input/Input";
import "../css/Registro.css";


const Registro = () => 
   {
        return (
                    <main className="main">
                        <section className="containerRegistro1 .col-5 .col-lg-12">
                        <div >
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
                            <br></br>
                            <br></br>
                            <br></br>
                       
                            <br></br>
                            <br></br>
                            <br></br>
                        </section>
                        <section className="containerRegistro2">
                                <br></br>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">
                                        * Nombre Completo
                                    </label>
                                    <Input
                                        attribute={{
                                            id: "nombre",
                                            name: "nombre",
                                            type: "text",
                                            placeholder: "Ingrese su nombre"
                                        }}
                                    />
                                </a>
                                <h1>Registro BP</h1>
                            </div>
                            <section className="containerRegistro Obligatorio">
                                <br></br>
                                <h3>*Obligatorio</h3>
                                <br></br>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">
                                        *Email
                                    </label>
                                    <Input
                                        attribute={{
                                            id: "mail",
                                            name: "mail",
                                            type: "text",
                                            placeholder: "Ingrese su mail"
                                        }}
                                    />
                                </div>
                                <br></br>
                                <br></br>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">
                                        *Contraseña
                                    </label>
                                    <Input
                                        attribute={{
                                            id: "contraseña",
                                            name: "contraseña",
                                            type: "password",
                                            placeholder: "Ingrese su contraseña",
                                        }}
                                    />
                                </div>
                                <br></br>
                                <br></br>
                                <div className="d-grid gap-2 d-md-block">
                                    <a
                                        className="btn btn-danger"
                                        href=""
                                        role="button"
                                    >
                                        Enviar
                                    </a>
                                </div>
                        </section>
                    </main>
                )
    };


export default Registro;
