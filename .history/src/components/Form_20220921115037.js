import { useState } from "react";


const Form = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return(
    <div>
      <input type="email" />
    </div>
  )
}

export default Form;