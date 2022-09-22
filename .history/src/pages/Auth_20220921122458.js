import './Auth.scss';
import ButtonInput from '../components/elements/button-input';
import { Link } from 'react-router-dom';

function Auth() {
  return (
    <div className="auth">
      <form autoComplete='on' className="auth__form">
        <Link to="/regis" className="auth__form-link" href="">Зарегистрироваться</Link>
        <h2 className="auth__form-title">вход</h2>


        
        {/* <input
          placeholder="Логин"
          className="auth__form-log"
          type="text" />
        <p className="auth__form-text">Поле не должно быть пустым</p>
        <input
          placeholder="Пароль"
          className="auth__form-pas"
          type="text" />
        <p className="auth__form-text">Поле не должно быть пустым</p>
        <label className="auth__form-radio form-radio">
          <input
            className="form-radio__radio"
            type="checkbox"
            name=""
            id="" />
          <span className="form-radio__text">Я согласен получать обновления на почту</span>
        </label>
        <p className="auth__form-text1">Логин или пароль неверен</p>
        <div className="auth__form-button">
          <ButtonInput

            onClick
            text={'Войти'}
          />
        </div> */}
      </form>

    </div>
  )
}

export default Auth;