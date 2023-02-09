import React from "react";
import { Link } from "react-router-dom";
import burguer1 from '../img/burguer1.jpg';
import wp from '../img/wp.jpeg';
import insta from '../img/insta.jpeg';
import face from '../img/face.jpeg';
import tw from '../img/tw.jpeg';
import "../css/footer.css";

function Footer() {
    return (
        <>
                <div>
                    <footer className="cFooter">

                        <div className="container">

                            <div className="row">


                                <div className="col-sm">
                                    <img src={burguer1} alt="" className="iHamburguesa" />
                                </div>

                                <div className="col-sm ">


                                    <Link to="error"><img src={wp} alt="" className="iRedes" /></Link>
                                    <Link to="error"><img src={insta} alt="" className="iRedes" /></Link>
                                    <Link to="error"><img src={face} alt="" className="iRedes" /></Link>
                                    <Link to="error"><img src={tw} alt="" className="iRedes" /></Link>


                                </div>

                                <div className="col-sm">
                                    <div className="lista">

                                        <li><Link to="/" className="item">Inicio</Link></li>
                                        <li><Link to="/QuienesSomos" className="item">Quienes Somos</Link></li>
                                        <li><Link to="/Menu" className="item">Menu</Link></li>
                                        <li><Link to="/Contacto" className="item">Contacto</Link></li>
                                    </div>

                                </div>

                            </div>


                            <div className="row align-items-flex-start">

                                <div className="col-sm text-white">
                                    <p>©Copyright. Todos los derechos reservados.</p>

                                </div>

                            </div>
                        </div>

                    </footer>
                </div>
        </>
    )
}


export default Footer