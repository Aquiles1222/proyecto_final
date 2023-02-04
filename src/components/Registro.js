import React from "react";
import styled from "styled-components";
import IconoBurguer from "../img/IconoBurguer.jpg";
import Input from "../Login/ComponenteLogin/input/Input";


const Registro = () => {
    return (
        <>
            {" "}
            <RegistroContain>
                <div>
                    <header className="NavBarInvisble">
                        
                    </header>
                    <main className="Main">
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
                            <h3>*Obligatorio</h3>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                        <br></br>
                            <br></br>
                            <br></br>
                        </section>
                        <section className="containerRegistro2">
                            <article className="article">
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
                                </div>
                                <br></br>
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
                                        className="btn btn-dangerbtn btn-secondary"
                                        href=""
                                        role="button"
                                    >
                                        Enviar
                                    </a>
                                </div>
                            </article>
                        </section>
                    </main>
                </div>
            </RegistroContain>
        </>
    );
};


export default Registro

const RegistroContain = styled.body`
  * {
    font-family: fantasy !important;
    
  }
  .Main {
    background-color: rgb(237, 215, 188);
    height: 50rem;
  }

  .textAreaComentario {
    height: 148px;
  }
  .containerRegistro1{
    background-color: rgb(237, 215, 188);
    height: 10rem;
    width: 100%;
    margin-bottom: 2rem;
    margin-top: 100px;
  }

  .containerRegistro1 img {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }

  .containerRegistro2 {
    font-family: sans-serif;
    height: 150px;
    background-color: rgb(237, 215, 188);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 5px;
    margin-top: 100px;
  }



  article{
    background-color: white;
    display:block;
    margin-top: 29rem;
    width: 100%;
    margin-bottom: 100px;

  }
  .NavBarInvisible {
      margin-top: 0;
      margin-bottom: 100px;
    }

  @media only screen and (max-width: 600px) {
    .NavBarInvisible {
      margin-top: 0;
      margin-bottom: 200px;
    }
    }
  
`;
