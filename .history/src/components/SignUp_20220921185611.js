import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setUser } from "store/reducers/userSlice";
import Form from "./Form";
import './SignUp.scss'

const SignUp = () => {
  const dispatch = useDispatch();
  const push = useNavigate();



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
      .catch(console.error)
  };
  return (
    <>
      <div className="regis">
      <form autoComplete='on' className="regis__form">
        <Link to="/auth" className="regis__form-link" href="">Авторизоваться</Link>
        <h2 className="regis__form-title">регистрация</h2>
      <Form
        title={'Регистрация'}
        handleClick={handleRegister}
      />
      </form>

</div>

    </>
  )
}

export default SignUp;