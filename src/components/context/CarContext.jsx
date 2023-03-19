import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([]);

    const addItem = (item,quantity) => {
        if (isInCart(item.id)){
            let pos = cart.findIndex(x => x.id === item.id);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        }else{
            setCart([...cart,{...item,quantity:quantity}])
        }
    }
     
    const removeItem = (itemId) => {
        const items = cart.filter(item => item.id !== itemId)
        setCart([...items]);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc += item.quantity,0);
    }

    const cartSum = () => {
        return cart.reduce((acc, item) => acc += item.quantity * item.precio,0);
    }

    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clear,cartTotal,cartSum}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;