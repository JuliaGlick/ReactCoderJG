import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

const Checkout = () => {
    const[user, setUser] = useState({})
    const[validateEmail, setValidateEmail] = useState("")
    const [orderId, setOrderId] = useState("")
    const {cart, total, clear} = useContext(CartContext)
    
    const datosFactura = (ev) => {
        setUser({
            ...user,
            [ev.target.name]: ev.target.value
        })
    }
    const finalizarCompra = (ev) => {
        ev.preventDefault()
        if(!user.name && !user.phone){
            alert("Complete los campos obligatorios")
        } else {
            let order = {
                user, 
                item:cart,
                total:total(),
                date:serverTimestamp()
            }
            const ventas = collection (firestore, "orders")
            addDoc(ventas, order)
            .then((response) => {
                setOrderId(response.id)
                clear()
            })
            .catch((error) => console.error(error))
        }
    }
    return(
           <div>
            {orderId !== ""
            ? <div>
                <h2>Felicitaciones! Su orden fue generada con exito</h2>
                <h5>Su codigo de orden es: {orderId}</h5>
            </div>
            :  <div>
            <h2>Terminar Compra</h2>
            <h5>Completar el formulario con sus datos</h5>
            <form onSubmit={finalizarCompra}>
                <div className="mb-3">
                    <label className="form-label">Nombre Completo</label>
                    <input className="form-control" onChange={datosFactura} type="text" placeholder="Nombre y Apellido" name="name"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input className="form-control" onChange={datosFactura} type="number" placeholder="+54..." name="phone"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input className="form-control" onChange={datosFactura} type="email" placeholder="chihiroramen@chihiroramen.com" name="mail"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirme su Email</label>
                    <input className="form-control" type="email" placeholder="chihiroramen@chihiroramen.com" name="mail" onChange={((ev) =>setValidateEmail(ev.target.value))}/>
                </div>
                <button className="btn btn-dark" type="submit" disabled={validateEmail !== user.mail} >Generar Factura</button>
            </form>
        </div>
            }
           </div>
    )
}

export default Checkout;