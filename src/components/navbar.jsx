
import React from 'react'
import styled from 'styled-components';
import burger1 from '../img/burguer1.jpg';
import { NavLink } from 'react-router-dom';


function NavbarContain() {
    return (
        <>
            <div>

                <NavContainer>
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
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>
                </NavContainer>

            </div>
        </>
    )
}

const NavContainer = styled.nav`

*{
    font-family: fantasy !important;
  }
  
  /*Navbar*/
  .navbar {
    align-items: center;
    background-color: black !important;
    height: 100px; /*200px*/
    position: fixed;
    overflow: hidden;
    background-color: #333;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
  }
  
  /*icono*/
  
  .navbar img {
    width: 80px;
    height: 80px;
  }
  
  /*menu*/
  .container {
    position: sticky;
    justify-content: space-between;
  }
  
  .text-burger {
    font-size: 30px;
    color: white;
  }
  
  .menu {
    color: white !important;
  }
  
  
  @media only screen and (max-width: 600px)
  {
    .navbar {
        height: 200px; /*300px*/
    }
  }


`;

export default NavbarContain