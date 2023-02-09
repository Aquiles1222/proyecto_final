import Plantilla from '../img/Plantilla.jpg';
import styled from 'styled-components';
import '../css/styleQS.css'
import "../css/CartaQs.css"


const CartaQS = () => {
  return (
    <>
        <body>
          <div>
            <header className='NavBarInvisible'>

            </header>
          </div>
          <section className="Seccion1">
            <article className="container ">
              <div className="card text-bg-dark Carta Carta1" >
                <img src={Plantilla} className="card-img" alt="..." />
                <div className="card-img-overlay Carta">
                  <h2 className="TituloQS">¿Quienes Somos?</h2>
                  <p className="card-text " >Somos un Grupo de Jóvenes Tucumanos de entre 20 a 30 años, con ambiciones de hacer nuestra hamburguesería la mas grande de la Provincia.
                    Buscamos excelencia y calidad en nuestros productos, asi como un buen precio para que nuestros clientes puedan sentirse sastisfechos a la hora de probar nuestras hamburguesas.</p>
                </div>
              </div>
            </article>
          </section>
        </body>
    </>
  )
}


export default CartaQS;