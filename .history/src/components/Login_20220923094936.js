import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "store/reducers/userSlice";
import Form from "./Form";
import './Login.scss';


const Login = () => {
  const dispatch = useDispatch();
  const push = useNavigate();



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
      .catch((error)  => {
        const errorMessage = 'Firebase: Error (auth/user-not-found).
        at createErrorInternal (assert.ts:136:1)
        at _fail (assert.ts:65:1)
        at _performFetchWithErrorHandling (index.ts:177:1)
        at async _performSignInRequest (index.ts:195:1)
        at async _signInWithCredential (credential.ts:37:1)'
        console.log(typeof error);
        if (error === errorMessage) {
          alert('ошибка')
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
      // errorText1={errorText}
      
    />

  )
}
export default Login;