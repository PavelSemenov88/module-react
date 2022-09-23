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

  const [errorMessEmail='', setErrorMessEmail] = useState()
  const [errorMessPass='', setErrorMessPass] = useState()


  const handleLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
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
        switch (error.)

        // if (error.code === 'auth/user-not-found') {
        //   setErrorMessEmail('Email неверен')
        // } else
        // if (error.code === 'auth/wrong-password') {
        //   setErrorMessPass('Пароль неверен')
        // }
        
      })
  };

  return (

    <Form
      link={'/regis'}
      linkText={'Зарегистрироваться'}
      title={'вход'}
      btnText={'Войти'}
      handleClick={handleLogin}
      errorMessEmail={errorMessEmail}
      errorMessPass={errorMessPass}

    />

  )
}
export default Login;