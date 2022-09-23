import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/reducers/basket';
import Button from './button';
import './card-basket.scss';


function CardBasket({ id, img, name, price, quantity, total, link }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addToCart({
      name,
      id,
      price,
      img,
    }))
  };
  const deleteToCart = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <div className="cardBasket">
      <div className="cardBasket__content content">
        <Link to={link} className="content__img">
          <img src={img} alt="" className="content__img-img" />
        </Link>
        <div className="content__description description">
          <div className="description__title">{name}</div>
          <div className="description__price">{price.toLocaleString('ru-RU')} ₽</div>
          <div className="description__quantity">{quantity} шт.</div>
          <div className="description__totalPrice">{total.toLocaleString('ru-RU')} ₽</div>
        </div>
      </div>
      <div className="cardBasket-button">
        <div onClick={addToCart} className="cardBasket-button__plus">
          <Button
            url={'images/plus.svg'}
          />
        </div>
        <div onClick={deleteToCart} className="cardBasket-button__minus">
          <Button
            url={'images/minus.svg'}
          />
        </div>
      </div>

    </div>
  );
}

export default CardBasket;
