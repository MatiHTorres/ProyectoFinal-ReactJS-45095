import { Link, useParams } from "react-router-dom";

const ThankYou = () => {
    const {boletaId} = useParams();
    return(
        <div className="container my-5 text-center">
             <div className="row">
                <div className="col-md-12">
                    {boletaId ? <div className="alert alert-success text-center" role="alert"><h3>Gracias por su compra</h3><p>Se genero una boleta con el ID: <b>{boletaId}</b></p></div> : ""}
                </div>
            </div>
            <Link to={"/"} className="btn btn-success">Volver a la Pagina Principal</Link>
            
        </div>
    )
}

export default ThankYou;