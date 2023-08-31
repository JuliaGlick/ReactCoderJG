import AddCart from "../AddCart/AddCart";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { getProducts } from "../asyncMock";


const ItemDetail = ({id, name, image, price, stock}) => {
    const cartContext = useContext(CartContext);
    
    return (
       /* <article>
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
        </article>*/

<Card style={{width: "18rem"}} >
<CardHeader>
    <Card.Img variant="top" src={image} />
</CardHeader>
<Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
        Precio: ${price}
    </Card.Text>
    <Card.Text>
        Stock Disponible: ${stock}
    </Card.Text>
</Card.Body>
<Card.Footer>
    <AddCart/>
    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
</Card.Footer>
</Card>
)}

export default ItemDetail;

