import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import Form from "./Form";

const SignUp = () => {
  const dispatch = useDispatch();

  

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
        dis
      })
      .catch(console.error)
  };
  return (
    <Form
      title={'register'}
      handleClick={handleRegister}
    />
  )
}

export default SignUp;