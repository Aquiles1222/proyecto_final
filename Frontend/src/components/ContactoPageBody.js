import React from 'react';
import "../css/ContactoPageBody.css"
import IconoBurguer from '../img/IconoBurguer.jpg'


const ContactoPageBody = () => {
    return (
        <>
                <header className="NavBarInvisible">
                </header>
                <div>
                    <main className="Main">
                        <div className="containercontacto .col-5 .col-lg-12">
                            <a className="navbar-brand" href="/Contacto">
                                <img src={IconoBurguer} alt='...' width="30" height="24" className="d-inline-block align-text-top" />
                            </a>
                            <h1>Contacto BP</h1>
                        </div>
                        <section className="container">
                            <br></br>
                            <h3>*Obligatorio</h3>
                            <br></br>
                            <article className="article ">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">*Nombres</label>
                                    <input type="email" required className="form-control" id="exampleFormControlInput1" placeholder="Escriba su respuesta" />
                                </div>
                                <br></br>
                                <br></br>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">*Apellidos</label>
                                    <input type="email" required className="form-control" id="exampleFormControlInput1" placeholder="Escriba su respuesta" />
                                </div>
                                <br></br>
                                <br></br>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">*Email</label>
                                    <input type="email" required className="form-control" id="exampleFormControlInput1" placeholder="example:  name@mail.com" />
                                </div>
                                <br></br>
                                <br></br>
                                <div className="form-floating">
                                    <textarea className="form-control textAreaComentario" placeholder="Leave a comment here" id="floatingTextarea2" height="100" ></textarea>
                                    <label for="floatingTextarea2" required>Comentarios</label>
                                </div>
                                <br></br>
                                <div className="d-grid gap-2 d-md-block">
                                    <a className="btn btn-danger" href="error.html" role="button">Enviar</a>
                                </div>

                            </article>
                        </section>
                    </main>
                </div>
        </>
    )
}

export default ContactoPageBody;
