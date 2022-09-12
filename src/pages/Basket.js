import './Basket.scss';

import Card from '../components/elements/card-basket';
// import {products} from '../add-products';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { addProduct } from '../store/reducers/basket'
import { v4 as uuidv4 } from 'uuid';

function Basket() {
  const basket = useSelector(state => state.basket.basket)

  console.log(basket);

  return (
    <main className="basket">
      <div className="container">
        <header className="header__basket">
          <div className="header__basket-title">Корзина с выбранными товарами</div>
          <Link to="/" className="header__basket-icon">НАЗАД</Link>
        </header>
        <div className="cards-basket">
          {basket.map(key1 => {
            const {id, name, description, price, weight, img} = key1
            return (
              <Card
                key={id}
                id={id}
                img={img}
                name={name}
                // text={description}
                price={price}
                // weight={weight}
                />
            )
          })}
        </div>
      </div>
      <footer className="footer">
        <div className="footer__line"></div>
        <div className="container">
          <div className="footer__basket basket">
            <div className="basket__order order">
              <span className="order__text">Заказ на сумму:</span>
              <span className="order__sum">6 220 ₽</span>

            </div>
            <div className="basker__btn btn">
              <button className="btn__style">Оформить заказ</button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Basket;