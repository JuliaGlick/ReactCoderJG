import cart from "./assets/cart.svg"

const CartWidget = () => {
    return ( 
            <div>
                <img src={cart} alt="cart-widget" style={{width: 45}}/>
                0
            </div>
    )
}

export default CartWidget;