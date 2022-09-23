import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
      .catch()
  };

  return (
    <>
      {/* <div className="auth">
        <form autoComplete='on' className="auth__form">
          <Link to="/regis" className="auth__form-link" href="">Зарегистрироваться</Link>
          <h2 className="auth__form-title">вход</h2> */}
          <Form
          link
          linkText={'Зарегистрироваться'}
            title={}
            btnText={"ВХОД"}
            handleClick={handleLogin}
          />
        {/* </form>

      </div> */}
    </>

  )
}
export default Login;