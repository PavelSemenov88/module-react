import './Products.scss';

import Card from '../components/elements/card';
import { products } from '../products';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Products() {
  let total = 0;
  const itemsList = useSelector(state => state.cart.itemsList);
  itemsList.forEach(item => {
    total += item.totalPrice;
  })

  const quantity = useSelector(state => state.cart.totalQuantity);

  return (
    <main className="main">
      <div className="container">
        <header className="header">
          <h1 className="header__title">наша продукция</h1>
          <div className="header__basket basket">
            <div className="basket__quantity quantity">
              <div className="quantity__position">{quantity} товара</div>
              <div className="quantity__sum">на сумму {total.toLocaleString('ru-RU')} ₽</div>
            </div>
            <Link to="/basket" className="basket__icon">
              <img src="images/basket.svg" alt="" />
            </Link>
          </div>
        </header>
        <div className="cards">
          {products.map(item => {
            const { id, name, description, price, weight, img } = item
            return (
              <Card
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
