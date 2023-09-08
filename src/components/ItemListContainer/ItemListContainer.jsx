import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
   

    const {categoryId} = useParams()

    useEffect(() => { 
        const coleccion = categoryId ? query(collection(firestore, "products"), where("category", "==", categoryId)): collection(firestore, "products")
        getDocs(coleccion)
        .then((response) => {
            const list = response.docs.map((product) => {
                return{
                    id: product.id,
                    ...product.data()
            }
            })
            setProducts(list)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1> 
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;