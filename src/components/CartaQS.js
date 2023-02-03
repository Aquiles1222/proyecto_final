import '../css/EstiloQS.css';
import Plantilla from '../img/Plantilla.jpg';
import styled from 'styled-components';


export default function CartaQS(){
    return(
        <>
            <div>
            <section className="Seccion1">
                <article className="container ">
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
            </div>
        </>
    )
}

const CartaQSContain = styled.body`
body {
  background: url('../img/fondoo.jpg');
  background-size: 100% no-repeat;
  font-family: fantasy !important;
}

/*Seccion1*/
.Seccion1{
  display: flex;
  margin-top: 3rem;
  margin-bottom: 10rem;
  
}

.container{
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
  height: 500px;
  width: 200px;
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



 /*Seccion2*/
#seccion2 .car, 
#seccion2 .card h5{
  font-size: 1.5rem;
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