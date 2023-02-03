import styled from 'styled-components';
import Aquiles from '../img/Aquiles.jpeg';
import gonzalo from '../img/gonzalo.jpeg';
import Victor from '../img/Victor.jpeg';
import Plantilla from '../img/Plantilla.jpg'


function QuienesSomosPageBody() {
  return (
    <>
      <body>
        <main>
          <QuienesSomosContain>
            <section className="Seccion1">
              <article className="">
                <div className="card text-bg-dark Carta">
                  <img src={Plantilla} className="card-img" alt="..." />
                  <div className="card-img-overlay Carta">
                    <h2 className="TituloQS">¿Quienes Somos?</h2>
                    <p className="card-text " >Somos un Grupo de Jóvenes Tucumanos de entre 20 a 30 años, con ambiciones de hacer nuestra hamburguesería la mas grande de la Provincia.
                      Buscamos excelencia y calidad en nuestros productos, asi como un buen precio para que nuestros clientes puedan sentirse sastisfechos a la hora de probar nuestras hamburguesas.</p>
                  </div>
                </div>
              </article>
            </section>
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
          </QuienesSomosContain>
        </main>
      </body>
    </>
  )
}
export default QuienesSomosPageBody


const QuienesSomosContain = styled.body`


body {
  background: url(../img/fondoo.jpg);
  background-size: 100%;
  font-family: fantasy !important;
}
/*Seccion1*/
.Seccion1{
  display: flex;
  margin-top: 3rem;
  margin-bottom: 10rem;
  box-sizing: 100vh;
  position: static;
}

.Seccion1 .container{
  display: flex;
  justify-content: center;
  align-items: center;
}

h2{
  margin-top: 50px !important;
  font-family: 'Anton', sans-serif;
  font-style: italic;
  font-size: 20px;
}

.Carta{
  display: block;
  text-align: center;
  justify-content: center;
  color: white ;
  margin: 30px;
  width: 450px;
  height: 200px;
  font-family: 'Anton', sans-serif;
  font-style: italic;
  font-size: 25px;
}

.Carta img{
  height: auto;
  width: auto;
}
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

@media only screen and (max-width: 600px){


  html{
    background-size: 100% no-repeat;
  }
  .seccion1{
    align-items: center;
    justify-content: flex-start;
    width: 20rem;
    padding-left: 10px;
    padding-right: 60px;
    text-align: left;
  }
  
    .Articulo1{
      font-size: 20px;
    }

    .TitleQS{
      font-size: 35px;
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