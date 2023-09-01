import Button from "../Button/Button";
import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }
    const decrement = () => {
        if (count > 1){
            setCount(count - 1)
        }
    }
    return(
        <div className="counter">
             <div className="controls">
             <button className="btn btn-primary" onClick={decrement}>-</button>
             <h4 className="number">{count}</h4>
             <button className="btn btn-primary" onClick={increment}>+</button>
             </div>
             <div>
             <button className="btn btn-primary" onClick={() => onAdd(count)} disabled={!stock} >Agregar al carrito</button>
             </div>
        </div>
    )
}

export default ItemCount;