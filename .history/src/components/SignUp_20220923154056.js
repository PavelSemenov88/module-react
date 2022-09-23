import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setUser } from "store/reducers/userSlice";
import Form from "./Form";
import { useState } from "react";
// import './SignUp.scss'

const SignUp = () => {
  const dispatch = useDispatch();
  const push = useNavigate();
  const [errorMessLength = '', setErrorMessLength ] = useState()
  const [errorMessLog = '', setErrorMessLog] = useState()



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
      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case 'auth/missing-email':
            setErrorMessLength('Логин должен содержать не менее 4-х символов');
            setErrorMessLog('');
            break;
          // case 'auth/wrong-password':
          //   setErrorMess('Email или пароль неверен');
          //   setErrorMessLog('');
          //   break;
          case 'auth/invalid-email':
            setErrorMessLog('Email не валидный');
            // setErrorMessLength('');
            break;

            case 'auth/email-already-in-use':
            setErrorMessLog('Email существует');
            // setErrorMessLength('');
            break;

            case 'auth/invalid-email':
            setErrorMessLog('Email не валидный');
            // setErrorMessLength('');
            break;
          default:
        }
      })
  };
  return (

    <Form
      link={'/auth'}
      linkText={'Авторизоваться'}
      title={'регистрация'}
      btnText={'Зарегистрироваться'}
      handleClick={handleRegister}
      errorMessLength={errorMessLength}
      errorMessLog={errorMessLog}
    />

  )
}

export default SignUp;