import './Product.scss';

import CardProduct from '../components/elements/card-product';
// import { products } from '../products';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { products } from '../products';
import ButtonEnd from '../components/elements/button-end';
import Button from '../components/elements/button';
import { require } from 'numeralize-ru';
import { useAuth } from 'hooks/use-auth';
import { removeUser } from '../store/reducers/userSlice'

function Product(params) {
  const { id } = useParams();

  const itemList = products.filter((item) => item.id === id);

  let total = 0;
  const itemsList = useSelector(state => state.cart.itemsList);
  itemsList.forEach(item => {
    total += item.totalPrice;
  })

  const quantity = useSelector(state => state.cart.totalQuantity);

  const navig = useNavigate();
  const goBack = () => navig(-1);

  const pluralize = require('numeralize-ru').pluralize;

  const {email} = useAuth();

  return (
    <main className="product">
      <div className="container">
        <header className="header">
          <div onClick={goBack} className="product__title">
            <Button
              url={'images/back.svg'}
            />
          </div>
          <div className="header__basket">
            <div className="basket__quantity quantity">
              <div className="quantity__position">{quantity} {pluralize(quantity, 'товар', 'товара', 'товаров')}</div>
              <div className="quantity__sum">на сумму {total.toLocaleString('ru-RU')} ₽</div>
            </div>
            <Link to="/basket" className="basket__icon">
              <img src="images/basket.svg" alt="" />
            </Link>
            <div onClick={() => dispatch(removeUser())}>
              <ButtonEnd
                text={`Выход из ${email}`}
              />
            </div>
          </div>
        </header>
          {itemList.map(item => {
            const { id, name, description, price, weight, img } = item
            return (
              <CardProduct
                link={`/${id}`}
                key={id}
                id={id}
                img={img}
                name={name}
                description={description}
                price={price}
                weight={weight}
              />
            )
          })}
      </div>
    </main>
  );

}



export default Product;
