import { Link } from "react-router-dom"
import logo from '../assets/letras-dorado.png'

export function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* <img src={logo} className="App-logo" alt="logo" height={50} /> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/planes"><h4>PLANES</h4></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/sorteos"><h4>SORTEOS</h4></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/premios"><h4>PREMIOS</h4></Link>
                                </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/resultados"><h4>RESULTADOS</h4></Link>
                            </li>
                                   
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}


