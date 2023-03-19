import CartWidget from "./CartWidget";
import { Link , NavLink } from "react-router-dom";
import logo from "./images/Panaderia.png";

const NavBar = () => {
    return (
        <div className="container" >
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}>
                                <img src={logo} alt="Panaderia Los Sabores" width={"120"} />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item" id="menu">
                                        <NavLink className="nav-link" activeclassname={"active"} to={"/"}>
                                            Inicio
                                        </NavLink>
                                    </li>
                                    <li className="nav-item" id="menu">
                                        <NavLink className="nav-link" activeclassname={"active"} to={"/category/pan"}>
                                            Panaderia
                                        </NavLink>
                                    </li>
                                    <li className="nav-item" id="menu">
                                        <NavLink className="nav-link" activeclassname={"active"} to={"/category/pasteles"}>
                                            Pasteleria
                                        </NavLink>
                                    </li>
                                    <li className="nav-item" id="menu">
                                        <NavLink className="nav-link" activeclassname={"active"} to={"/category/empanadas"}>
                                            Empanadas
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col d-flex align-item-center justify-content-end">
                            <CartWidget />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
