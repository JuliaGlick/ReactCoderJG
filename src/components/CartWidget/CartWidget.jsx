import { useContext } from "react";
import cart from "./assets/cart.svg"
import { CartContext } from "../../context/cartContext";
import { Badge } from "react-bootstrap";

const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext)
    
    return ( 
            <div>
                <img src={cart} alt="cart-widget" style={{width: 45}}/>
                {cartQuantity() > 0 && <Badge>{cartQuantity()}</Badge> } 
            </div>
    )
}

export default CartWidget;