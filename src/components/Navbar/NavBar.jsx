import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget"
import ramenLogo from "./assets/ramenLogo.svg"
import {NavLink, Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <img src={ramenLogo} alt="logo" style={{ width: 60 }} />
            <Link to="/" >
            <Navbar.Brand>Chihiro Ramen</Navbar.Brand>
            </Link>
            
            <Nav>
                <NavLink to={`/category/ramen`} className={({isActive}) => isActive ? "ActiveOption" : "Option"} ><Button variant="success">Ramen</Button></NavLink>
                <NavLink to={`/category/utensillos`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}><Button variant="success">Utensillos de Cocina</Button></NavLink>
                <NavLink to={`/category/sopas`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}><Button variant="success">Sopas Instantaneas</Button></NavLink>
            </Nav>
            <CartWidget />
         </Container>
      </Navbar>
    );
}

export default NavBar;