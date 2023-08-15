import "./NavBar.css";
import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget"
import ramenLogo from "./assets/ramenLogo.svg"
import {NavLink, Link} from "react-router-dom";

function NavBar() {
    return (
        <nav className='navbar'>
            <img src={ramenLogo} alt="logo" style={{ width: 60 }} />
            <Link to="/" >
            <h3>Chihiro Ramen</h3>
            </Link>
            
            <div>
                <NavLink to={`/category/ramen`} className={({isActive}) => isActive ? "ActiveOption" : "Option"} texto="Ramen"/>
                <NavLink to={`/category/utensillos`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}texto="Utensillos de Cocina"/>
                <NavLink to={`/category/sopas`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}texto="Sopas Instantaneas"/>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;