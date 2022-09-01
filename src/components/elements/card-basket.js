import './card-basket.scss';


function Card ({url, title, text, price, weight}) {
  return (
    <div className="cardBasket">
      <div className="cardBasket__content content">
        <img src={url} alt="" className="content__img" />
        <div className="content__description description">
          <div className="description__title">{title}</div>
          <div className="description__price">{price} ₽</div>
        </div>
      </div>
      <div className="cardBasket-button">
        <div className="cardBasket-button__text"></div>
      </div>
    </div>
  );
}

export default Card;
