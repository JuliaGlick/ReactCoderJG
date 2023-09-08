import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () =>{
    const {cart, clear, total} = useContext(CartContext)
    console.log(cart)

    return (
        <div>
            {cart.length 
            ? <div>
                {cart.map((item) => <CartItem key={item.id}  item={item} />)}
                <p>Total a pagar:  $ {total()}</p>
                <div>
                    <button className="btn btn-danger" onClick={clear}>Vaciar carrito</button>
                    <Link to="/checkout" className="btn btn-dark">Terminar Compra</Link>
                </div>
             </div>
                
            : <div>
                <h3>Tu carrito esta vacio!</h3>
                <Link to="/" className="btn btn-success">Ir a comprar</Link>
            </div>

            }
        </div>
    )
}

export default Cart;