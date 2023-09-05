import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartItem =  ({item}) => {
    const {deleteItem} = useContext(CartContext)
    
    return(
        <div className="d-flex justify-content-center align-items-center">
            <img src={item.img} alt={item.name} width={"150rem"} />
            <p>{item.name} </p>
            <p>{item.price} </p>
            <p>{item.quantity} </p>
            <p>Subtotal: ${item.quantity * item.price} </p>
            <button className="btn btn-dark" onClick={() => deleteItem(item.id)}>X</button>
        </div>
    )
}

export default CartItem;