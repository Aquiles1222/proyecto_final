import styled from "styled-components"
import Aquiles from '../img/Aquiles.jpeg';
import gonzalo from '../img/gonzalo.jpeg';
import Victor from '../img/Victor.jpeg';

const CartasDePresentacion = () => {
    return (
        <>
            <CartasDePresentacionContain>
                <article id="seccion2" className="ancla">
                    <div className="card-group">
                        <div className="card">
                            <img src={Aquiles} className="card-img-top tamañoImagen" alt="Aquiles" />
                            <div className="card-body">
                                <h5 className="card-title">Aquiles</h5>
                                <p className="card-text">Soy Aquiles tengo 16 años, me gustan jugar a los juegos de computadora y dibujar, soy hincha de Boca y una vez termine la secundaria quiero estudiar Ingeriría de Sistemas de Información.</p>

                            </div>
                        </div>
                        <div className="card">
                            <img src={gonzalo} className="card-img-top tamañoImagen" alt="Gonzalo" />
                            <div className="card-body">
                                <h5 className="card-title">Gonzalo</h5>
                                <p className="card-text">Mi Nombre es Gonzalo, tengo 25 años,vivo en Tafi Viejo estudiante de Ing. en Sistema, me gusta jugar al Basquet y salir con amigos.</p>

                            </div>
                        </div>
                        <div className="card">
                            <img src={Victor} className="card-img-top tamañoImagen" alt="Victor" />
                            <div className="card-body">
                                <h5 className="card-title">Victor</h5>
                                <p className="card-text">Hola mí nombre es Víctor Palacios, tengo 26 años, soy de Tafí Viejo(Tucumán), estudio Ingeniería en Sistemas de Información, y me gusta el fútbol.</p>

                            </div>
                        </div>
                    </div>
                </article>
            </CartasDePresentacionContain>
        </>
    )
}


const CartasDePresentacionContain = styled.body`


#seccion2 .car, 
#seccion2 .card h5{
  font-size: 1.5rem;
  display: inline;
  position: relative;
}
#seccion2 {
  top: -100vh;   
}

@media only screen and (max-width: 600px)
{
  h2{
    font-size: 20px !important;
  }
  .Carta{
    margin: 0px;
    width: 250px;
    height: 50px;
    font-size: 15px;

  }
  
  .Carta img{
    padding-right: 50px;
    height: 400px;
    width: 300px;
  }
}


@media only screen and (max-width: 486px){
  html{
    background-size: 100% no-repeat;
  }

}

.tamañoImagen{
height:500px;
}





`;

export default CartasDePresentacion