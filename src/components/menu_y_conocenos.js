import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import Menu from '../img/Menu.jpg';
import MenuBurguer1 from '../img/MenuBurguer1.jpg'
import QuienesSomos2 from '../img/QuienesSomos2.jpg'


function MenuYConocenos() {
    return (
        <>
            <MenuYConocenosCss>
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
            </MenuYConocenosCss>

        </>)


}



const MenuYConocenosCss = styled.article`
.Main {
    background-color: white;
}
.cartas{
padding: 0px !important;
margin: 0px !important;
font-family: fantasy !important;
}
.BotonMenu{
   text-decoration: none;
  color: white;
  padding: 9px 20px;
  border: 1px solid #fff;
  text-transform: uppercase;
  transition: all .3s ease-in-out;
} 
.BotonConocenos {
    text-decoration: none;
  color: white;
  padding: 9px 20px;
  border: 1px solid #fff;
  text-transform: uppercase;
  transition: all .3s ease-in-out;
}

.cartaimg {
height: 100%;
width: 100%;
opacity: 0.7;
}
.Novedades {
background-color: white;
border: 5px;
border-radius: 10px;
font-family: 'Lora', serif;

}
.novedadesTexto {
    font-family: fantasy !important;
    color: rgb(35, 109, 66);
}

.cartasNovedades {
padding: 20px;
}
.quienesSomosImg {
    height: 100%; 
    width: 100%;
}
.fuenteHelvatica {
    font-family: Helvetica;
}

.cartasNovedades img {
border-style: outset;
border: 5px;
border-radius: 10px;
}

@media only screen and (min-width: 1200px)
{
.cartasNovedades img {
    height: 400px !important;
  }
}

@media only screen and (min-width: 992px)
{
.cartasNovedades img {
    height: 300px !important;
  }
}

@media only screen and (min-width: 768px)
{
.cartasNovedades img {
    height: 200px;
  }
}



`;

export default MenuYConocenos