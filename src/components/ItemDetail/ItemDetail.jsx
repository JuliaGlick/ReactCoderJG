import AddCart from "../AddCart/AddCart";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link } from "react-router-dom";



const ItemDetail = ({ id, name, image, price, stock }) => {
    const cartContext = useContext(CartContext);

    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`)
        setQuantityAdded(quantity)
    }

    return (
        <Card style={{ width: "18rem" }} >
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
                {
                    quantityAdded > 0 ? (
                        <Link to="/cart" className="btn btn-primary">Terminar Compra</Link>
                    ) : (<ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />)
                    
                }
            </Card.Footer>
        </Card>
    )
}

export default ItemDetail;

