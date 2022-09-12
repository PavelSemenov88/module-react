import './card.scss';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/reducers/basket';
import { v4 as uuidv4 } from 'uuid';
// import React from 'react';
// import uuid from 'react-uuid';



function Card ({id, img, name, description, price, weight}) {

  const dispatch = useDispatch();
  
  

  const handelAddProduct = () => {

    let item = {
      key: id,
      id: uuidv4(),
      img: img,
      name: name,
      price: price,
    }

    dispatch(addProduct(item))


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
            <span className="changes__price">{price} ₽ \ </span>
            <span className="changes__weight">{weight}</span>

          </div>
          <div onClick={handelAddProduct} className="footer__add-button add-button">
            <div className="add-button__text"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Card;
