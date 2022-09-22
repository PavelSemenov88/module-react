import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { setUser } from "store/reducers/userSlice";
import Form from "./Form";

const SignUp = () => {
  const dispatch = useDispatch();

  

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
        dispatch(setUser)
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