import './Basket.scss';

import Card from '../components/elements/card-basket';
import {products} from '../add-products';
import { Link } from 'react-router-dom';

function Basket() {
  return (
    <main className="basket">
      <div className="container">
        <header className="header__basket">
          <div className="header__basket-title">Корзина с выбранными товарами</div>
          <Link to="/" className="header__basket-icon">НАЗАД</Link>
        </header>
        <div className="cards-basket">
          {products.map(key => {
            const {id, name, description, price, weight, img} = key
            return (
              <Card
                key={id}
                url={img}
                title={name}
                text={description}
                price={price}
                weight={weight} />
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