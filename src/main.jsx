import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navigation/Navigation.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/cartContext';
import "bootstrap/dist/css/bootstrap.min.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <CartProvider>
     <BrowserRouter>
     <NavBar/>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/category/:categoryId" element={<ItemListContainer/>} />
      <Route path="/item/:id" element={<ItemDetailContainer/>} />
      <Route path="*" element={<h1>404 NOT FOUND</h1>} />
    </Routes>
    </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
)
