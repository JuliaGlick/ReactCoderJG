import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos al Mejor Sitio de Venta de Ramen"}/>
      <ItemDetailContainer/>
    </>
  )
}

export default App
