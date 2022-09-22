import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import Form from "./Form";

const SignUp = () => {
  const dispatch = useDispatch();

  

  const handleLogin = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error)
  };
  return (
    <Form
      title={'register'}
      handleClick
    />
  )
}

export default SignUp;