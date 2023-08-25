import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/cartContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <CartProvider>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/category/:categoryId" element={<ItemListContainer/>} />
      <Route path="/item/:id" element={<ItemDetailContainer/>} />
      <Route path="*" element={<h1>404 NOT FOUND</h1>} />
    </Routes>
    </BrowserRouter>
     <App />
    </CartProvider>
  </React.StrictMode>,
)
