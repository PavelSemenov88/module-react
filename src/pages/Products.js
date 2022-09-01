import './Products.scss';

import Card from '../components/elements/card';
import {products} from '../products';


function App() {
  return (
    <main className="main">
      <div className="container">
        <header className="header">
          <h1 className="header__title">наша продукция</h1>
          <div className="header__basket basket">
            <div className="basket__quantity quantity">
              <div className="quantity__position">3 товара</div>
              <div className="quantity__sum">на сумму 3 500 ₽</div>

            </div>
            <div className="basket__icon">
              <img src="images/basket.svg" alt="" />
            </div>
          </div>
        </header>
        <div className="cards">
          {products.map(key => {
            const {id, name, description, price, weight, img} = key
            return (
              <Card
                url={img}
                title={name}
                text={description}
                price={price}
                weight={weight} />
            )
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
