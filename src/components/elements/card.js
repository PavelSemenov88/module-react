import './card.css';
import AddButton from "./add-button"


function Card ({url, title, text, price, weight}) {
  return (
    <div className="card">
      <img className="card__preview" src={url} alt="" />
        <div className="card__cont">
          <div className="cont__card">
            <h2 className="card__title">{title}</h2>
            <p className="card__text">{text}</p>
          </div>
          <fooder className="card__footer footer">
            <div className="footer__changes changes">
              <span className="changes__price">{price}₽ \ </span>
              <span className="changes__weight">{weight}</span>

            </div>
            <div className="footer__add">
              <AddButton />
            </div>
          </fooder>
        </div>
    </div>
  );
}

export default Card;
