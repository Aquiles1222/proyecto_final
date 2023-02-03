import styled from 'styled-components';
import '../css/Style.css';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <>
      <div>
        <BannerCss>
          <article className='banner'>
            <div className='bannerContenido'>
              <h1>Burger Proytect</h1>
              <Link to='/error'>Haz tu pedido ya</Link>
            </div>
          </article>
        </BannerCss>
      </div>
    </>

  );
}

const BannerCss = styled.body`
*{
    font-family: fantasy !important;
  }
.banner {
  position: relative;
  width: 100%;
  height: 110vh;
  background-color: tomato;
  background-size: 100%;
  background-position: center;
  transition: all .1s ease-in-out;
  background-image: url('../img/slider1.jpg');
  animation: banner 28s infinite linear;
}

.bannerContenido {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  color: white;
  background-color: rgba(25, 5, 1, .6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bannerContenido h2 {
  margin: 0;
  padding: 0;
  padding-bottom: 30px;
  font-size: 30px;
  text-align: center;
}

.bannerContenido a {
  text-decoration: none;
  color: white;
  padding: 9px 20px;
  border: 1px solid #fff;
  text-transform: uppercase;
  transition: all .3s ease-in-out;
}

.bannerContenido a:hover {
  background-color: aliceblue;
  color: black;
}
`;




export default Banner;  
