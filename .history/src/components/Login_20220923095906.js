import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "store/reducers/userSlice";
import Form from "./Form";
import './Login.scss';


const Login = () => {
  const dispatch = useDispatch();
  const push = useNavigate();
  const errorText1


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
        if (error.code === 'auth/user-not-found') {
          errorText1 = 'error'
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
      errorText={errorText1}

    />

  )
}
export default Login;