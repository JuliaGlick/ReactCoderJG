import AddCart from "../AddCart/AddCart";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";


const ItemDetail = ({id, name, image, price, stock}) => {
    const cartContext = useContext(CartContext);
    
    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={image} alt={name}/>
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer>
                <AddCart/>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
            </footer>
        </article>
)}

export default ItemDetail;

