import { createContext, useState } from "react";

export const CartContext  = createContext([]);

function CartProvider ({children}) {
    const [cartQuantity, setCartQuantity] = useState(0)

    const incrementCartQuantity = () => {
        setCartQuantity(cartQuantity + 1);
    };

     const decrementCartQuantity = () => {
        setCartQuantity(cartQuantity - 1);
    };

    const clear = () => {
        setCartQuantity([])
    }

    return (
    <CartContext.Provider value={{
        cartQuantity: cartQuantity,
        incrementCartQuantity: incrementCartQuantity,
        decrementCartQuantity
    }} >
        {children}
    </CartContext.Provider>
    );
}

export default CartProvider;