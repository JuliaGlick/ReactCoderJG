import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const coleccionProd = collection(firestore, "products")
        const docReference = doc(coleccionProd, id)
        getDoc(docReference)
        .then((response) => setProduct({id:response.id, ...response.data()})
        )
        .catch((error) => 
            console.error(error)
        ).finally(() => setIsLoading(false))
        setIsLoading(false);
    }, [])
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
