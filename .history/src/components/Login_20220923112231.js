import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "store/reducers/userSlice";
import Form from "./Form";
import './Login.scss';



const Login = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  let errorMess = 'fff';
  


  const handleLogin = (email, password, errorMess) => {
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
        
        // error.code === 'auth/user-not-found' ? (errorMess = 'error auth') : (errorMess = '')

        

        if (error.code === 'auth/user-not-found') {
          errorMess = 'error auth'
        } else if (error.code === 'auth/wrong-password') {
          errorMess = 'error pass'
        }
        console.log(errorMess);
      })
  };

  return (

    <Form
      link={'/regis'}
      linkText={'Зарегистрироваться'}
      title={'вход'}
      btnText={'Войти'}
      handleClick={handleLogin}
      errorText={errorMess}

    />
  
  )
}
export default Login;