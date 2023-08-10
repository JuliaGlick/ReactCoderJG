import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({id, name, image, price, stock}) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
            </footer>
        </article>
)}

export default ItemDetail;

