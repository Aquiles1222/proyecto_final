import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <ErroCotain>
                <header className="NavBarInvisible"></header>
                <body>
                    <main>


                        
                        <div className="home">
                            <Link button type="button" className="btn btn-outline-dark d-flex justify-content-center " to="/">
                                <span class="material-symbols-outlined" >
                                    home
                                </span>
                            </Link>
                        </div>
                    </main>
                </body>
            </ErroCotain>
        </>
    )
}

const ErroCotain = styled.body`
body{
    background-color: white;
    background-size: 100vh ;
    font-family: fantasy !important;
  }
  .home {
    block-size: calc(100vh - 808px);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: white;
    height: calc(100vh - 236px)
}

  .NavBarInvisible{
  margin-top: 0;
  margin-bottom: 100px;
}
.Texto{
    color: black;
}

@media only screen and (max-width: 600px){
    .NavBarInvisible{
  margin-top: 0;
  margin-bottom: 200px;
}
}


`;
export default Error