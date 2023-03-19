import { useContext } from "react";
import { CartContext } from "./context/CarContext";
import { Link } from "react-router-dom";
import del from "./images/x-circle-fill.svg"

const Cart = () => {
    const {cart,cartTotal,removeItem,clear,cartSum} = useContext(CartContext);

    if (cartTotal() === 0){
        return (
            <div className="container">
                <div className="row">
                    <div className="alert alert-danger text-center" role="alert">
                        <h3>El carrito esta vacio.</h3>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="row">        
                <div className="col-md-12">
                <h2 className="text-center">Carrito de Productos</h2>
                    <table className="table text-center align-middle">
                        <tbody>
                            <tr>
                                <td>&nbsp;</td>
                                <td>Producto</td>
                                <td>Precio unitario</td>
                                <td>Cantidad</td>
                                <td>Precio Total</td>
                            </tr>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="text-center" width="15%"><img src={item.imagen} alt={item.nombre} width="75%" /></td>
                                        <td className="text-center align-middle" width="30%">{item.nombre}</td>
                                        <td className="text-center align-middle" width="15%">${item.precio}</td>
                                        <td className="text-center align-middle" width="10%">{item.quantity}</td>
                                        <td className="text-center align-middle" width="10%">${item.precio * item.quantity}</td>
                                        <td className="text-end align-middle" width="20%"><button type="button" className="btn btn-danger" onClick={() => {removeItem(item.id)}}><img src={del} alt={"Eliminar Productos"} width={25} /></button></td>
                                    </tr>
                                
                                ))
                            }
                            <tr>
                                <td className="text-center"><button className="btn btn-warning" onClick={() => {clear()}}>Vaciar Carrito</button></td>
                                <td className="text-end" colSpan={3}><b>Total a pagar:</b></td>
                                <td className="text-center"><b>${cartSum()}</b></td>
                                <td className="text-end"><Link to={"/checkout"} className="btn btn-danger bg-danger">Finalizar Compra</Link></td>
                            </tr>
                        </tbody>                     
                    </table>
                </div>                          
            </div>
        </div>
    )
}

export default Cart;