import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock,onAdd}) => {
    const [items,setItems] = useState(1);
    const [itemStock,setItemStock] = useState(stock);
    const [itemAdded,setItemAdded] = useState(false);

    const sumarStock = () => {
        if (items < itemStock){
            setItems(items + 1);
        }
    }
    const restarStock = () => {
        if (items > 1){
            setItems(items - 1);
        }
    }

    const addToCart= () => {
        if(itemStock >= items){
            setItemStock(itemStock - items);
            setItems(1);
            setItemAdded(true);
            onAdd(items);
        }  
    }

    useEffect (() => {
        setItemStock(stock);
    },[stock]);

    return (
        <div className="container text-center">
            <div className="row my-1">
                <div className="col">
                    <div className="btn-group">
                        <button href="#" className="btn btn-warning" onClick={restarStock}>-</button>
                        <button href="#" className="btn btn-warning active">{items}</button>
                        <button href="#" className="btn btn-warning" onClick={sumarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    {itemAdded ? <Link to={"/cart"} className="btn btn-warning">Terminar Mi Compra</Link> :
                    <button className="btn btn-warning" onClick={addToCart}>Agregar Al Carrito</button> }               
                </div>
            </div>
        </div>
    )
}

export default ItemCount;