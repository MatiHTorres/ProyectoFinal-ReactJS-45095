import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark" id="producto"  >
            <div className="card my-2"  >
                <img className="card-img-top" src={item.imagen} alt={item.nombre} />
                <div className="card-body" id="card">                   
                    <p className="card-title text-center">{item.nombre}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item;