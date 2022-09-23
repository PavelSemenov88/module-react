import './App.scss';

import Basket from './pages/Basket';
import Products from './pages/Products';
import Notfound from './pages/Notfound';
import Product from './pages/Product';
import Login from 'components/Login';
import SignUp from 'components/SignUp';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Notification from './pages/Notification';
// import { uiActions } from './store/reducers/ui-slice';
import { sendCartData } from './store/reducers/cart-actions';
import { fetchData } from './store/reducers/cart-actions';




let isFirstRender = true;


function App() {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchData())
  },[dispatch])

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
    

  }, [cart, dispatch]);
  return (
    <>
      
      {/* {notification && (<Notification type={notification.type} message={notification.message} />)} */}
      <Routes>
        <Route path="/auth" element={<Login/>}/>
        <Route path="/regis" element={<SignUp/>}/>
        <Route path="/" element={<Products />}/>
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<Notfound />}/>
        <Route path="/:id" element={<Product />}/>
      </Routes>
    </>
  );
}

export default App;
