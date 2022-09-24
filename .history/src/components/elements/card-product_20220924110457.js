import './card-product.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/basket';
import ButtonInput from './button-input';




function CardProduct ({id, img, name, description, price, weight, link}) {
  
  const dispatch = useDispatch();
  const addToCart = (e) => {
    // e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart({
      name,
      id,
      price,
      img,
    }))
  }

  return (
    <div className="card-product">
      <img className="card-product__preview" src={img} alt="" />
      <div className="card-product__cont">
        <div className="cont__card-product">
          <h2 className="card-product__title">{name}</h2>
          <p className="card-product__text">{description}</p>
        </div>
        <footer className="card-product__footer-product footer-product">
          <div className="footer-product__changes-product changes-product">
            <span className="changes-product__price">{price.toLocaleString('ru-RU')} ₽ \ </span>
            <span className="changes-product__weight">{weight}</span>
          </div>
          <div onClick={addCart} className="footer-product__add-button">
              <ButtonInput
                text={'В корзину'}
              />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CardProduct;
