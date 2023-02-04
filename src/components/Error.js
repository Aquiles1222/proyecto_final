import styled from "styled-components";
import { Link } from "react-router-dom";
import '../css/error.css'

const Error = () => {
    return (
        <>
            <ErrorCotain>
                <header className="NavBarInvisible">
                    
                </header>
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
            </ErrorCotain>
        </>
    )
}

const ErrorCotain = styled.body`
body{
    background-size: 100vh ;
    font-family: fantasy !important;
  }
  .home {
    block-size: calc(100vh - 808px);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: calc(100vh - 236px)
}
h2{
    color:black;
}

.Texto{
    color: black;
}
    .NavBarInvisible{
    margin-top: 0;
    margin-bottom: 100px;
    }

    @media only screen and (max-width: 600px){
        .NavBarInvisible{
    margin-top: 0;
    margin-bottom: 200px;
    }
    }


`;
export default Error