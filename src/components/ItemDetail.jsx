import { useContext } from "react";
import { CartContext } from "./context/CarContext";
import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {

    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity)
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-end">
                    <img src={item.imagen} width={250} alt={item.nombre} />
                </div>
                <div className="col d-flex align-items-center">
                    <div className="text-center">
                        <h2>{item.nombre}</h2>
                        <b>Precio: ${item.precio}</b>
                        <p>Stock: {item.stock}</p>
                        <p>{item.descripcion}</p>
                        <ItemCount stock={item.stock} onAdd={onAdd}/>
                        
                    </div>
                    
                </div> 
            </div>
        </div>
    )
}

export default ItemDetail;