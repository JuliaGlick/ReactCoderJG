import { useState, useEffect } from "react";
import { getProductById } from "../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState({});
    const {id} = useParams()

    useEffect(() => {
        getProductById(id)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        }).finally(() => setIsLoading(false))
        setIsLoading(false);
    }, [id])
    return (
        <>{isLoading ? <h4>Cargando...</h4> :  
        <div className="ItemDetailContainer"
        style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <ItemDetail {...product}/>
        </div>}</>
    )
}

export default ItemDetailContainer;
