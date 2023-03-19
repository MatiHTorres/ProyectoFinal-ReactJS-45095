import face from "./images/facebook.svg"
import insta from "./images/instagram.svg"
import twitter from "./images/twitter.svg"
import youtube from "./images/youtube.svg"
import logo from "./images/Panaderia.png"

const Footer = () => {
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <a href={"https://www.facebook.com/"} className="ms-3" target={"_blank"} rel="noreferrer"><img src={face} alt={"Facebook"} width={"24"}/></a>
                    <a href={"https://www.instagram.com/"} className="ms-3" target={"_blank"} rel="noreferrer"><img src={insta} alt={"Instagram"} width={"24"}/></a>
                    <a href={"https://www.twitter.com/"} className="ms-3" target={"_blank"} rel="noreferrer"><img src={twitter} alt={"Twitter"} width={"24"}/></a>
                    <a href={"https://www.youtube.com/"} className="ms-3" target={"_blank"} rel="noreferrer"><img src={youtube} alt={"Youtube"} width={"24"}/></a>
                </div>  
            </div>
            <hr />
            <div className="row">
                <div className="col-md-8">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href={"/"}>Politica de Privacidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href={"/"}>Defensa del Consumidor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href={"/"}>Proteccion de datos Personales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href={"/"}>Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 text-end text-secondary">
                    <p><img src={logo} alt={"Logo Panaderia"} width={"40"}/> © Los Sabores - 2023</p>
                </div>
            </div>   
        </div>
    )
}

export default Footer;