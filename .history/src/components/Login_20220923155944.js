import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "store/reducers/userSlice";
import Form from "./Form";
// import './Login.scss';



const Login = () => {
  const dispatch = useDispatch();
  const push = useNavigate();
  const [errorMessPass = '', setErrorMessPass ] = useState()
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
          case 'auth/invalid-email':
            setErrorMessLog('Email не валидный');
            break;
            case 'auth/email-already-in-use':
            setErrorMessLog('Email существует');
            break;
            case 'auth/missing-email':
            setErrorMessLog('Поле не должно быть пустым');
            break;
            case 'auth/weak-password':
            setErrorMessPass('Пароль недостаточно надежен');
            break;
            case 'auth/internal-error':
            setErrorMessPass('Поле не должно быть пустым');
            break;
          default:
            setErrorMessLog('');
            setErrorMessPass('');
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
      errorMessPass={errorMessPass}
      errorMessLog={errorMessLog}
    />
  )
}
export default Login;