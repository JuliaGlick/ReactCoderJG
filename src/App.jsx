import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting={"Bienvenidos al Mejor Sitio de Venta de Ramen"}/>} />
      <Route path="/category/:categoryId" element={<ItemListContainer/>} />
      <Route path="*" element={<h1>404 NOT FOUND</h1>} />
    </Routes>
    </BrowserRouter>
      
      
      <ItemDetailContainer/>
    </>
  )
}

export default App
