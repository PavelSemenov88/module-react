import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setUser } from "store/reducers/userSlice";
import Form from "./Form";
import './SignUp.scss'

const SignUp = () => {
  const dispatch = useDispatch();
  const push = useNavigate();



  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        push('/');
      })
      .catch(console.error)
  };
  return (

    <Form
      link={'/auth'}
      linkText={'Авторизоваться'}
      title={'регистрация'}
      handleClick={handleRegister}
    />

  )
}

export default SignUp;