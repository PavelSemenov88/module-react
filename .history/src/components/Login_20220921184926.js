import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "store/reducers/userSlice";
import Form from "./Form";


const Login = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
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
    <Form
      title={"D{JL"}
      handleClick={handleLogin}

    
    />
  )
}
export default Login;