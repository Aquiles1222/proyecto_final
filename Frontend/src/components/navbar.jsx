import React from 'react';
import "../css/navbar.css";
import burger1 from '../img/burguer1.jpg';
import { NavLink } from 'react-router-dom';


function NavbarContain() {
    return (
        <>
                    <header id="header" className="sticky-top">
                        <nav className="navbar navbar-expand-sm navbar-expand-lg navbar-dark bg-black justify-content-around">
                            <div className="d-flex align-items-center justify-content-start">
                                <a className="navbar-brand" href="/">
                                    <img src={burger1} width="30" height="24" className="d-inline-block align-text-top" alt='...' />
                                </a>
                                <div className="text-burger justify-content-center">
                                    <h1> BURGER PROYECT</h1>
                                </div>
                            </div>
                            <div className="justify-content-end">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                        <li className="nav-item ">
                                            <NavLink className={"nav-link"} to="/">Inicio</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={"nav-link"} to="/QuienesSomos">¿Quienes somos?</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={"nav-link"} to="/Menu">Menu</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={"nav-link"} to="/Contacto">Contacto</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={"nav-link, btn btn-outline-light"} to="/Login">Ingresar</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>
        </>
    )
}

export default NavbarContain
