import './Products.scss';

import CardProduct from '../components/elements/card';
import { products } from '../products';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ButtonEnd from '../components/elements/button-end';
import { require } from 'numeralize-ru';
import { useAuth } from 'hooks/use-auth';
import {Re}


function Products() {
  let total = 0;
  const itemsList = useSelector(state => state.cart.itemsList);
  itemsList.forEach(item => {
    total += item.totalPrice;
  })

  const quantity = useSelector(state => state.cart.totalQuantity);

  const pluralize = require('numeralize-ru').pluralize;

  const {isAuth, email} = useAuth();



  return (
    <main className="main">
      <div className="container">
        <header className="header">
          <h1 className="header__title">наша продукция</h1>
          <div className="header__basket basket">
            <div className="basket__quantity quantity">
              <div className="quantity__position">{quantity} {pluralize(quantity, 'товар', 'товара', 'товаров')}</div>
              <div className="quantity__sum">на сумму {total.toLocaleString('ru-RU')} ₽</div>
            </div>
            <Link to={'/basket'} className="basket__icon">
              <img src="images/basket.svg" alt="" />
            </Link>
            <Link to="/auth">
              <ButtonEnd
                onClick
                text={'Авторизация'}
              />
            </Link>


          </div>
        </header>
        <div className="cards">
          {products.map(item => {
            const { id, name, description, price, weight, img } = item
            return (
              <CardProduct
                link={`/${id}`}
                key={id}
                id={id}
                img={img}
                name={name}
                description={description}
                price={price}
                weight={weight}
              />
            )
          })}
        </div>
      </div>
    </main>
  );
}

export default Products;
