import { useState } from "react";
import ButtonInput from "./elements/button-input";
import './Form.scss'


const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <div className="form">

      
      <input
        className="form__email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />

      <input
        className="form__password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <label className="form__checkbox">
        <input
          className="form__checbox-input"
          type="checkbox"
          name=""
          id="" />
        <span className="form__checkbox-text">Я согласен получать обновления на почту</span>
      </label>
      <div className="button-form">
        <div
          className="form-button"
          onClick={(e) => {
            e.preventDefault()
            handleClick(email, pass)
          }}
        >
          {title}
        </div>
      </div>
    </div>
  )
}

export default Form;