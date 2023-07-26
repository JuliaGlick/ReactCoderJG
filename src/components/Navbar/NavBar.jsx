import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Chihiro Ramen</h3>
            <div>
                <button>Ramen</button>
                <button>Utensillos de Cocina</button>
                <button>Sopas Instantaneas</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;