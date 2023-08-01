import "./NavBar.css";
import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget"
import ramenLogo from "./assets/ramenLogo.svg"

function NavBar() {
    return (
        <nav className='navbar'>
            <img src={ramenLogo} alt="logo" style={{ width: 60 }} />
            <h3>Chihiro Ramen</h3>
            <div>
                <Button texto="Ramen"/>
                <Button texto="Utensillos de Cocina"/>
                <Button texto="Sopas Instantaneas"/>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;