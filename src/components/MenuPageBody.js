import styled from "styled-components"
import Cebolla from "../img/burguer_menos_tamaño/Cebolla.png"
import Chicken from "../img/burguer_menos_tamaño/Chicken.png"
import Cuarto from "../img/burguer_menos_tamaño/cuarto.png"
import DobleCuarto from "../img/burguer_menos_tamaño/doblecuarto.png"
import DobleJamonQueso from "../img/burguer_menos_tamaño/DobleJamonQueso.jpg"
import DobleNapolitano from "../img/burguer_menos_tamaño/DobleNapolitano.jpg"
import Ensalada from "../img/burguer_menos_tamaño/Ensalada.png"
import EnsaladaCaesar from "../img/burguer_menos_tamaño/ensaladacaesar.png"
import PapasChedarYBacon from "../img/burguer_menos_tamaño/Papas-Cheddar-y-Bacon.jpg"
import PapasChedar from "../img/burguer_menos_tamaño/Papas-Cheddar.jpg"
import PolloEspecial from "../img/burguer_menos_tamaño/polloespecial.png"
import Whopper from "../img/burguer_menos_tamaño/whopper.jpg"



const MenuPageBody = () => {
    return (
        <>
            <MenuPageBodyContain>
                <body>
                    <main>
                        <section>
                            <article className="container">
                                <div className="row Titulo">
                                    <h2 className="text-center Titulo">Nuestras Burguer</h2>
                                </div>
                                <div className="row row-cols-1 row-cols-md-2 g-4">
                                    <div className="col" >
                                        <div className="tarjetas">
                                            <img src={DobleNapolitano} className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="tarjetas">
                                            <img src={Cebolla} className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="tarjetas">
                                            <img src={Cuarto} className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="tarjetas">
                                            <img src={DobleCuarto} className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="tarjetas">
                                            <img src={DobleJamonQueso} className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="tarjetas">
                                            <img src={Whopper} className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row Titulo">
                                    <h2 className="text-center Titulo">Nuestras Burguer de Pollo</h2>
                                </div>
                                <div className="row row-cols-1 row-cols-md-2 g-4" id="tarjeta1">
                                    <div className="col">
                                        <div className="tarjetas">
                                            <img src={Chicken} className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="tarjetas">
                                            <img src={PolloEspecial} className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row Titulo">
                                    <h2 className="text-center Titulo">Nuestras Ensaladas</h2>
                                </div>
                                <div className="row row-cols-1 row-cols-md-2 g-4" id="tarjeta1">
                                    <div className="col">
                                        <div className="tarjetas">
                                            <img src={Ensalada} className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="tarjetas">
                                            <img src={EnsaladaCaesar} className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row Titulo">
                                    <h2 className="text-center Titulo">Papas Fritas</h2>
                                </div>
                                <div className="row row-cols-1 row-cols-md-2 g-4" id="tarjeta1">
                                    <div className="col">
                                        <div className="tarjetas">
                                            <img src={PapasChedar} className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="tarjetas">
                                            <img src={PapasChedarYBacon} className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </section>
                    </main>
                </body>
            </MenuPageBodyContain>
        </>
    )
}

export default MenuPageBody

const MenuPageBodyContain = styled.body`
    body{

        font-family: fantasy !important;
        margin-top: 120px;
    }

`;