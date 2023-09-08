import "./Item.css"
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

const Item = ({id, name, image, price, stock}) => {
    return (
      
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
                    Stock Disponible: {stock}
                </Card.Text>
                <Link to={`/item/${id}`} className="btn btn-primary">Ver Detalle</Link>
            </Card.Body>
            <Card.Footer></Card.Footer>
        </Card>



    )
}

export default Item;