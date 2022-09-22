import './Basket.scss';

import CardBasket from '../components/elements/card-basket';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/elements/button';
import ButtonEnd from '../components/elements/button-end';
import ButtonInput from '../components/elements/button-input';
import { useAuth } from 'hooks/use-auth';
import { removeUser } from '../store/reducers/userSlice'

function Basket() {
  const cartItems = useSelector((state) => state.cart.itemsList);

  let total = 0;
  const itemsList = useSelector(state => state.cart.itemsList);
  itemsList.forEach(item => {
    total += item.totalPrice;
  })

  const {isAuth, email} = useAuth();
  const dispatch = useDispatch();
  const navig = useNavigate();

  return !isAuth ? (navig('/auth')) : (
    <main className="basket">
      <div className="container">
        <header className="basket-header">
          <div className="basket-header__title">
            <Link to="/" className="basket-header__icon">
              <Button
                url={'images/back.svg'}
              />
            </Link>
            <div className="basket-header__text">Корзина с выбранными товарами</div>
          </div>
          <div onClick={() => dispatch(removeUser())}>
              <ButtonEnd
                text={`Выход из ${email}`}
              />
            </div>
        </header>
        <div className="cards-basket">
          {cartItems.map(item => {
            const { id, img, name, price, totalPrice, quantity } = item
            return (
              <CardBasket
                link={`/${id}`}
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
            <div className="basker__btn">
              <ButtonInput

                onClick
                text={'Оформить заказ'}
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Basket;