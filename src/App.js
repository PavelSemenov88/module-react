import './App.scss';

import Basket from './pages/Basket';
import Products from './pages/Products';
import Notfound from './pages/Notfound';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products/>}></Route>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
    </>



  );
}

export default App;
