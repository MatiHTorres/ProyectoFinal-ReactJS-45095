import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "./context/CarContext";
import Swal from "sweetalert2";

const Checkout = () => {
    const [boletaId,setBoletaId] = useState("");
    const {cart,cartTotal,clear,cartSum} = useContext(CartContext);
    const [nombre,setNombre] = useState("");
    const [email,setEmail] = useState("");
    const [telefono,setTelefono] = useState("");

    const mostrarAlerta= () => {
        Swal.fire({
            icon: 'error',
            title: 'Rellene todos los campos para continuar',
            timer: 2000
          })
    }

    const compraConfirmada= () =>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su compra se realizo correctamente',
            showConfirmButton: false,
            timer: 2000
          })
    }


    const generarBoleta = () => {
        const cliente = {name:nombre,email:email,fono:telefono};
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const boleta = {cliente:cliente, productos:cart, fecha:date , total:cartTotal()};

        if (nombre.length === 0){
            mostrarAlerta();
            return false;      
        }

        if (email.length === 0){
            mostrarAlerta();
            return false;      
        }

        if (telefono.length === 0){
            mostrarAlerta();
            return false;      
        }


        const db = getFirestore();
        const boletaCollection = collection(db,"boleta");
        addDoc(boletaCollection, boleta).then(data => {
            setBoletaId(data.id);
            clear();
        });
        compraConfirmada();
    }


    return(
        <div className="container">
            <div className="row">        
                <div className="col-md-8">
                <h2 className="text-center">Confirmar Compra</h2>
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
                                        <td className="text-center align-middle" width="15%">{item.quantity}</td>
                                        <td className="text-center align-middle" width="15%">${item.precio * item.quantity}</td>
                                    </tr>
                                
                                ))
                            }
                            <tr>
                                <td className="text-end" colSpan={4}><b>Total a pagar:</b></td>
                                <td className="text-center"><b>${cartSum()}</b></td>
                            </tr>
                        </tbody>                     
                    </table>
                </div>
                <div className="col-md-1"></div>            
                <div className="col-md-3">
                <h2 className="text-center">Generar Boleta</h2>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" onInput={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefoo" className="form-label">Telefono</label>
                        <input type="text" className="form-control" id="telefono" onInput={(e) => {setTelefono(e.target.value)}}/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={generarBoleta}>Pagar</button>
                </div>
            </div> 
            {boletaId ? <Navigate to={"/thankyou/" + boletaId} /> : ""}
        </div>
    )
}

export default Checkout;