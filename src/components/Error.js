import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <ErroCotain>

                <body>
                    <div className="home">
                        <Link button type="button" className="btn btn-outline-dark d-flex justify-content-center " to="/">
                            <span class="material-symbols-outlined" >
                                home
                            </span>
                        </Link>
                    </div>
                </body>
            </ErroCotain>
        </>
    )
}

const ErroCotain = styled.body`
body{
    background: url('../img/error.jpg') no-repeat;
    background-size: 100% ;
    padding-bottom: 2rem;
    font-family: fantasy !important;
    background-image: element(error)
  }
  .home {
    block-size: calc(100vh - 808px);
    margin-top: 40rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;
export default Error