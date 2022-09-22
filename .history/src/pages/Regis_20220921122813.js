import './Regis.scss';
import ButtonInput from '../components/elements/button-input';
import { Link } from 'react-router-dom';
import SignUp from 'components/SignUp';

function Regis() {
  return (
    <div className="regis">
      <form autoComplete='on' className="regis__form">
        <Link to="/auth" className="regis__form-link" href="">Авторизоваться</Link>
        <h2 className="regis__form-title">регистрация</h2>

        <SignUp/>
        {/* <input
          placeholder="Логин"
          className="regis__form-log"
          type="text" />
        <p className="regis__form-text">Поле не должно быть пустым</p>
        <input
          placeholder="Пароль"
          className="regis__form-pas"
          type="text" />
        <p className="regis__form-text">Поле не должно быть пустым</p>
        <label className="regis__form-radio form-radio">
          <input
            className="form-radio__radio"
            type="checkbox"
            name=""
            id="" />
          <span className="form-radio__text">Я согласен получать обновления на почту</span>
        </label>
        {
        <div className="regis__form-button">
          <ButtonInput

            onClick
            text={'Регистрация'}
          />
        </div> */}
      </form>

    </div>
  )
}

export default Regis;