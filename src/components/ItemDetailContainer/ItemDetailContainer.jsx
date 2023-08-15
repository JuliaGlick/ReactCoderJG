import { useState, useEffect } from "react";
import { getProductById } from "../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState({});
    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        }).finally(() => {
            console.log("Promesa Finalizada")
        })
        setIsLoading(false);
    }, [itemId])
    return (
        <>{isLoading ? <h4>Cargando...</h4> :  
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>}</>
    )
}

export default ItemDetailContainer;
