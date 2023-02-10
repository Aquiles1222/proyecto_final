import '../css/Style.css';
import { Link } from 'react-router-dom';
import "../css/banner.css"

function Banner() {
  return (
    <>
          <header className='NavBarInvisible'>
          </header>
          <article className='banner'>
            <div className='bannerContenido'>
              <h1>Burger Proyect</h1>
              <Link to='/error'>Haz tu pedido ya</Link>
            </div>
          </article>
    </>

  );
}

export default Banner;  
