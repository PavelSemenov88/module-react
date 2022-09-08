import './card.scss';



function Card ({url, title, text, price, weight, handelClick}) {
  return (
    <div className="card">
      <img className="card__preview" src={url} alt="" />
      <div className="card__cont">
        <div className="cont__card">
          <h2 className="card__title">{title}</h2>
          <p className="card__text">{text}</p>
        </div>
        <footer className="card__footer footer">
          <div className="footer__changes changes">
            <span className="changes__price">{price} ₽ \ </span>
            <span className="changes__weight">{weight}</span>

          </div>
          <div onClick={handelClick} className="footer__add-button add-button">
            <div className="add-button__text"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Card;
