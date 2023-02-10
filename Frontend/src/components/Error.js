import React from "react";
import { Link } from "react-router-dom";
import '../css/error.css'

const Error = () => {
    return (
        <>
                <header className="NavBarInvisible">
                </header>
                <body>
                    <div className="home">
                        <Link button type="button" className="btn btn-outline-dark d-flex justify-content-center " to="/">
                            <span class="material-symbols-outlined" >
                                home
                            </span>
                        </Link>
                    </div>
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
        </>
    )
}

export default Error;