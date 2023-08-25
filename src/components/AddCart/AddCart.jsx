import { useContext, useState } from "react";
import Button from "../Button/Button";
import { CartContext } from "../../context/cartContext";

function AddCart() {
    const cartContext = useContext(CartContext);
    const [addToCart, setAddToCart] = useState(false);

    const handleClick = () => {
        if(addToCart){
            cartContext.decrementCartQuantity();
        } else {
            cartContext.incrementCartQuantity ();
        }
        setAddToCart(!addToCart);
    }

    return (
        <div>
            <Button onClick={handleClick}>
                {addToCart ? "Eliminar del carrito" : "Agregar al carrito"}
            </Button>
        </div>
    )
}

export default AddCart;