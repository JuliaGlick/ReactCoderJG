import "./Item.css"
import { getProducts } from "../asyncMock";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link } from "react-router-dom";

const Item = ({id, name, image, price, stock}) => {
    return (
      <article className="cardItem">
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
        </article> 

        /* <Card>
            <CardHeader></CardHeader>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
            <Card.Footer>Precio: $ {precio}</Card.Footer>
        </Card>*/

/* <div className="cards-list">
  <div className="card 1">
    <div className="card_image"> <img src={image} /> </div>
    <div className="card_title title-black">
      <p>{name}</p>
    </div> 
  </div>
  </div>*/

    )
}

export default Item;