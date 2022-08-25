import './App.css';

import Card from './components/elements/card';



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
        <Card 
        url={'images/1.png'}
        title={'Устрицы по рокфеллеровски'}
        text={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'}
        price={'2 700'}
        weight={'500 г.'}/>

        <Card 
        url={'images/2.png'}
        title={'Свиные ребрышки на гриле с зеленью'}
        text={'Не следует, однако забывать, что реализация намеченных плановых'}
        price={'1 600'}
        weight={'750 г.'}/>

        <Card 
        url={'images/3.png'}
        title={'Креветки по-королевски в лимонном соке'}
        text={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'}
        price={'1 820'}
        weight={'7 шт.'}/>

        <Card 
        url={'images/4.png'}
        title={'Устрицы по рокфеллеровски'}
        text={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'}
        price={'2 700'}
        weight={'500 г.'}/>

        <Card 
        url={'images/1.png'}
        title={'Устрицы по рокфеллеровски'}
        text={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'}
        price={'2 700'}
        weight={'500 г.'}/>

        <Card 
        url={'images/2.png'}
        title={'Свиные ребрышки на гриле с зеленью'}
        text={'Не следует, однако забывать, что реализация намеченных плановых'}
        price={'1 600'}
        weight={'750 г.'}/>

        <Card 
        url={'images/3.png'}
        title={'Креветки по-королевски в лимонном соке'}
        text={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'}
        price={'1 820'}
        weight={'7 шт.'}/>

        <Card 
        url={'images/4.png'}
        title={'Устрицы по рокфеллеровски'}
        text={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'}
        price={'2 700'}
        weight={'500 г.'}/>
        </div>

      </div>
    </main>
  );
}

export default App;
