import React from "react";
import { Link } from "react-router-dom";
import Menu from '../img/Menu.jpg';
import MenuBurguer1 from '../img/MenuBurguer1.jpg'
import QuienesSomos2 from '../img/QuienesSomos2.jpg'
import "../css/menu_y_conocenos.css"


function MenuYConocenos() {
    return (
        <>
                <main className="Main">
                    <section className="container-fluid">
                        <div className="row row-cols-1 row-cols-md-2 g-4 ">
                            <div className="card text-bg-dark cartas">
                                <img src={Menu} className="cartaimg" alt="..." />
                                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                    <Link type="button" className="btn btn-outline-light rounded-0 BotonConocenos" aria-current="page" to="/QuienesSomos">Conocenos</Link>
                                </div>
                            </div>
                            <div className="card text-bg-dark cartas">
                                <img src={MenuBurguer1} className="cartaimg" alt="..." />
                                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                    <Link type="button" className="btn btn-outline-light rounded-0 BotonMenu" aria-current="page" to="Menu">Ver Menu</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br />
                    <div className="col text-center novedadesTexto" >
                        <h2>NOVEDADES</h2>
                    </div>
                    <br />
                    <section className="container ">
                        <div className="row row-cols-1 row-cols-md-2 g-4 Novedades">
                            <div className="col">
                                <div className="cartasNovedades">
                                    <img src={QuienesSomos2} className="card-img-top quienesSomosImg"
                                        alt="..." />
                                    <div className="card-body text-center">
                                        <h4 className="titulocarta">Contacto</h4>
                                        <p className="card-text">
                                            No dudes en ponerte en contacto con nosotros si tienes dudas o sugerencias.
                                        </p>
                                        <Link to="/Contacto" className="btn btn-dark fuenteHelvatica">Visitar</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="cartasNovedades">
                                    <img src={MenuBurguer1} className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h4 className="titulocarta">Probá nuestros nueva Hamburguesa</h4>
                                        <p className="card-text">
                                            Un nuevo sabor ha llegando, sé el primero en descubrirlo.
                                        </p>
                                        <Link to="/Menu" className="btn btn-dark fuenteHelvatica">Visitar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
        </>)


}

export default MenuYConocenos;