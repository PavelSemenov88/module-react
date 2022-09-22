import { useState } from "react";
import ButtonInput from "./elements/button-input";


const Form = ({title, handleClick}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const btn = (e) => {
    e.preventDefault()
    handleClick(email, pass)}
  


  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button
        onClick={btn}
      >
        {title}
      </button>
    </div>
  )
}

export default Form;