import { useState } from "react";


const Form = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => set}

      />
    </div>
  )
}

export default Form;