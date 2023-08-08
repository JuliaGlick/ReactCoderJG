import "./ItemListContainer.css"
import { getProducts } from "../asyncMock";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.log(error)
        })
    })
    return (
        <div className="main">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;