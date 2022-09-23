import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "store/reducers/userSlice";
import Form from "./Form";




const Login = () => {
  const dispatch = useDispatch();
  const push = useNavigate();
  const [errorMessPass, setErrorMessPass ] = useState()
  const [errorMessLog, setErrorMessLog] = useState()



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
        console.log(error.code);
        switch (error.code) {
          case 'auth/user-not-found':
            setErrorMessLog('Email не зарегистрирован');
            setErrorMessPass('');
            break;
            case 'auth/invalid-email':
            setErrorMessLog('Email не валидный');
            setErrorMessPass('');
            break;
            case 'auth/wrong-password':
            setErrorMessPass('Пароль неверный');
            setErrorMessLog('');
            break;
            case 'auth/internal-error':
            setErrorMessPass('Поле не должно быть пустым');
            setErrorMessLog('');
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
      errorMessPass={errorMessPass}
      errorMessLog={errorMessLog}
    />
  )
}
export default Login;