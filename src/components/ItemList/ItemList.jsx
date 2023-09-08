import Item from "../Item/Item"

const ItemList = ({products}) => {
    return(
        <div style={{
            display: "flex",
            flexDirection: "grid",
            alignItems: "center",
            justifyContent: "center",
        }} >
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList;