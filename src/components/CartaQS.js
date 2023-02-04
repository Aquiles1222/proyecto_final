import Plantilla from '../img/Plantilla.jpg';
import styled from 'styled-components';
import '../css/styleQS.css'


const CartaQS = () => {
  return (
    <>

      <CartaQSContain>
        <body>
          <div>

            <div className='Fondo'>
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
          </div>

        </body>
      </CartaQSContain>

    </>
  )
}



const CartaQSContain = styled.body`
*{
  align-items: center;
}
.NavBarInvisible{
  margin-top: 0;
  margin-bottom: 100px;
}
.Seccion1{
  display: flex;
  margin-top: 3rem;
  margin-bottom: 0;
}

.Seccion1 .container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{
  height: -400px
}

h2{
  margin-top: 50px !important;
  font-family: 'Anton', sans-serif;
  font-style: italic;
  font-size: 40px;
}

.Carta{
  display: block;
  text-align: center;
  justify-content: center;
  color: white ;
  margin: 30px;
  width: 450px;
  height: 600px;
  font-family: 'Anton', sans-serif;
  font-style: italic;
  font-size: 25px;
}
.Carta1{
  margin-top: 110px;
  margin-left: 0px;
}

.Carta img{
  height: 600px;
  width: 500px;
}

@media only screen and (max-width: 600px){
.Seccion1{
  margin-top: 100px;
}
.NavBarInvisible{
  margin-top: 0;
  margin-bottom: 200px;
}

  h2{
  margin-top: 50px !important;
  font-family: 'Anton', sans-serif;
  font-style: italic;
  font-size: 40px;
}

.Carta{
  display: block;
  text-align: center;
  justify-content: center;
  color: white ;
  margin-top: 30px;
  width: 450px;
  height: 600px;
  font-family: 'Anton', sans-serif;
  font-style: italic;
  font-size: 25px;
  
}

.Carta img{
  height: 600px;
  width: 500px;
}

}




/* {
  h2{
    font-size: 20px !important;
  }
  .NavBarInvisible{
  margin-top: 0;
  margin-bottom: 200px;
}
  .Carta{
    margin: 0px;
    width: 250px;
    height: 50px;
    font-size: 15px;
    margin-left: 0px;
    margin-top: 110px;
   
  }
  
  .Carta img{
    padding-right: 50px;
    height: 600px;
    width: 300px;
  }
} */



 /*Seccion2*/



@media only screen and (max-width: 600px){


  .Seccion1{
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
      font-size: 45px;
  }

}
@media only screen and (max-width: 486px){
}

.tamañoImagen{

height:500px;

}


`;


export default CartaQS