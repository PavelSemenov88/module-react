import { useState } from "react";
import { Link } from "react-router-dom";

import './Form.scss'


const Form = ({ link, linkText, title, btnText, handleClick, errorMess, errorMessLog, errorMessPass }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');




  return (

    <div className="auth">
      <form autoComplete='on' className="auth__form">
        <div className="auth__form-link">
        <Link to={link} className="form-link" href="">{linkText}</Link>
        </div>
        <h2 className="auth__form-title">{title}</h2>
        <div className="form">

          <input
            className="form__email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <p className="form__error form__error_posi">{errorMessLog}</p>
          
          <input
            className="form__password"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
          />
          <p className="form__error form__error_posi"> {errorMessPass}</p>

          <label className="form__checkbox">
            <input
              className="form__checbox-input"
              type="checkbox"
              name=""
              id="" />
            <span className="form__checkbox-text">Я согласен получать обновления на почту</span>
            
          </label>
          <p className="form__error">{errorMess}</p>
          <div className="button-form">
            
            <div
              className="form-button"
              onClick={(e) => {
                e.preventDefault()
                handleClick(email, pass)
              }}
            >
              {btnText}
            </div>
          </div>
        </div>
      </form>

    </div>
  )
}

export default Form;