import Aquiles from '../img/Aquiles.jpeg';
import gonzalo from '../img/gonzalo.jpeg';
import Victor from '../img/Victor.jpeg';
import "../css/CartasDePresentacionParaQs.css"

const CartasDePresentacion = () => {
    return (
        <>
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
        </>
    )
}


export default CartasDePresentacion