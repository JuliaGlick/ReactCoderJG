import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos al Mejor Sitio de Venta de Ramen"}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity)=> console.log("cantidad agregada", quantity)} />
    </>
  )
}

export default App
