import './card.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/basket';
import Button from './button';
import { Link } from 'react-router-dom';



function Card ({id, img, name, description, price, weight, link}) {
  
  const dispatch = useDispatch();
  const addCart = (e) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart({
      name,
      id,
      price,
      img,
    }))
  }

  return (
    <Link
    to={link}
    className="card">
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
          <div onClick={addCart} className="footer__add-button">
              <Button
                url={'images/plus.svg'}
              />
          </div>
        </footer>
      </div>
    </Link>
  );
}

export default Card;
