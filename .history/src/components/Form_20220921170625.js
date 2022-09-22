import { useState } from "react";
import ButtonInput from "./elements/button-input";


const Form = ({title, handleClick}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <div className="form">
      <input
      className="form__email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ема"
      />

      <input
      className="form__password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button
        onClick={(e) => {
          e.preventDefault()
          handleClick(email, pass)}}
      >
        {title}
      </button>
    </div>
  )
}

export default Form;