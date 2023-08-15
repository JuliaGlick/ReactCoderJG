import "./ItemListContainer.css"
import { getProducts } from "../asyncMock";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.log(error)
        }).finally(() => {
            console.log("Promesa Finalizada")
        })
    }, [categoryId])
    return (
        <div className="main">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;