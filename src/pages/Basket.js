import './Basket.scss';

import CardBasket from '../components/elements/card-basket';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../components/elements/button';

function Basket() {
  const cartItems = useSelector((state) => state.cart.itemsList);

  let total = 0;
  const itemsList = useSelector(state => state.cart.itemsList);
  itemsList.forEach(item => {
    total += item.totalPrice;
  })

  return (
    <main className="basket">
      <div className="container">
        <header className="header__basket">
          <Link to="/" className="header__basket-icon">
            <Button
              url={'images/back.svg'}
            />
          </Link>
          <div className="header__basket-title">Корзина с выбранными товарами</div>
        </header>
        <div className="cards-basket">
          {cartItems.map(item => {
            const {id, img, name, price, totalPrice, quantity} = item
            return (
              <CardBasket
                key={id}
                id={id}
                img={img}
                name={name}
                total={totalPrice}
                price={price}
                quantity={quantity}
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
              <span className="order__sum">{total.toLocaleString('ru-RU')} ₽</span>

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