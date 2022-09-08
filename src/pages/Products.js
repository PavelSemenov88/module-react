import './Products.scss';

import Card from '../components/elements/card';
import {products} from '../products';
import { Link } from 'react-router-dom';
import { useState } from 'react';



function Products() {
  const [sum, setSum] = useState(0);
  const [count, setCount] = useState(0);
  const addPriceProduct = (price) => {
    setSum(sum => sum + parseInt(price));
    setCount(count => count + 1);
  }

  return (
    <main className="main">
      <div className="container">
        <header className="header">
          <h1 className="header__title">наша продукция</h1>
          <div className="header__basket basket">
            <div className="basket__quantity quantity">
              <div className="quantity__position">{count} товара</div>
              <div className="quantity__sum">на сумму {sum} ₽</div>

            </div>
            <Link to="/basket" className="basket__icon">
              <img src="images/basket.svg" alt="" />
            </Link>
          </div>
        </header>
        <div className="cards">
          {products.map(key => {
            const {id, name, description, price, weight, img} = key
            return (
              <Card
                key={id}
                url={img}
                title={name}
                text={description}
                price={price}
                weight={weight} 
                handelClick={(e) => addPriceProduct(price)}
                />
            )
          })}
        </div>
      </div>
    </main>
  );
}

export default Products;
