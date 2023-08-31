import "./Item.css"
import { getProducts } from "../asyncMock";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link } from "react-router-dom";

const Item = ({id, name, image, price, stock}) => {
    return (
      /* <article className="cardItem">
            <header className="header">
                <h2 className="itemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={image} alt={name} className="itemImg"/>
            </picture>
            <section>
                <p className="info">
                    Precio: ${price}
                </p>
                <p className="info">
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer>
                <Link to={`/item/${id}`} className= "button">Ver Detalle</Link>
            </footer>
        </article> */

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
                <Link to={`/item/${id}`} className= "button">Ver Detalle</Link>
            </Card.Body>
            <Card.Footer></Card.Footer>
        </Card>



    )
}

export default Item;