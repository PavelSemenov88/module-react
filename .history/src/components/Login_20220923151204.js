import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "store/reducers/userSlice";
import Form from "./Form";
import './Login.scss';



const Login = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  const [errorMess = '', setErrorMess] = useState()
  const [errorMessLog = '', setErrorMessLog] = useState()



  const handleLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        push('/');
      })
      .catch((error) => {

        switch (error.code) {
          case 'auth/user-not-found':
            setErrorMess('Email или пароль неверен');
            setErrorMessLog('');
            break;
          case 'auth/wrong-password':
            setErrorMess('Email или пароль неверен');
            setErrorMessLog('');
            break;
          case 'auth/invalid-email':
            setErrorMessLog('Поле не должно быть пустым');
            setErrorMess('');
            break;
          default:
        }
      })
  };

  return (

    <Form
      link={'/regis'}
      linkText={'Зарегистрироваться'}
      title={'вход'}
      btnText={'Войти'}
      handleClick={handleLogin}
      errorMess={errorMess}
      errorMessLog={errorMessLog}
    />
  )
}
export default Login;