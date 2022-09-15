import './card.scss';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/reducers/basket';
import Button from './button';



function Card ({id, img, name, description, price, weight}) {
  
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart({
      name,
      id,
      price,
      img,
    }))
  }

  return (
    <div className="card">
      <img className="card__preview" src={img} alt="" />
      <div className="card__cont">
        <div className="cont__card">
          <h2 className="card__title">{name}</h2>
          <p className="card__text">{description}</p>
        </div>
        <footer className="card__footer footer">
          <div className="footer__changes changes">
            <span className="changes__price">{price.toLocaleString('ru-RU')} ₽ \ </span>
            <span className="changes__weight">{weight}</span>
          </div>
          <div onClick={addToCart} className="footer__add-button">
              <Button
                url={'images/plus.svg'}
              />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Card;
