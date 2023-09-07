import './App.css';
import Navigation from './components/Navigation/Navigation';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useEffect } from 'react';
import { firestore } from './firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';




function App() {

  useEffect(() => {
    const collectionRef = collection(firestore, "products")
    
    getDocs(collectionRef)
    .then((snapshot) => {
      console.log({snapshot})
      snapshot.forEach((doc) => console.log(doc.data()))
  })
    .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <ItemListContainer greeting={"Bienvenidos al Mejor Sitio de Venta de Ramen"}/>
    </>
  )
}

export default App;
