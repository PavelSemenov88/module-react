import './App.scss';

import Basket from './pages/Basket';
import Products from './pages/Products';
import Notfound from './pages/Notfound';
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';



function App() {
  const cart = useSelector(state => state.cart);
  useEffect(() => {
    const sendRequest = async() => {
      const res = await fetch('https://redux-http-4f4b5-default-rtdb.firebaseio.com/cartItems.json', {
        method: "PUT",
        body: JSON.stringify(cart)
      });
      const data = await res.json();
    };
    sendRequest();
      
  }, [cart])
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<Notfound />}></Route>
        <Route path="/:id" element={<Product />}></Route>
      </Routes>
    </>
  );
}

export default App;
