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

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

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

    <div className="auth">
      <form autoComplete='on' className="auth__form">
        <Link to={link} className="auth__form-link" href="">{linkText}</Link>
        <h2 className="auth__form-title">{title}</h2>
        <div className="form">

          <input
            className="form__email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <p className="error-1" ></p>
          <input
            className="form__password"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
          />

          <label className="form__checkbox">
            <input
              className="form__checbox-input"
              type="checkbox"
              name=""
              id="" />
            <span className="form__checkbox-text">Я согласен получать обновления на почту</span>
          </label>
          <div className="button-form">
            <div
              className="form-button"
              onClick={(e) => {
                e.preventDefault()
                handleClick(email, pass)
              }}
            >
              Войти
            </div>
          </div>
        </div>
      </form>

    </div>

    // <Form
    //   link={'/regis'}
    //   linkText={'Зарегистрироваться'}
    //   title={'вход'}
    //   btnText={'Войти'}
    //   handleClick={handleLogin}
      
    // />

  )
}
export default Login;