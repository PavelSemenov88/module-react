import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "./Form";


const Login = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error)
  };

  return (
    <Form
      title={"sing in"}
      handleClick={handleLogin}

    
    />
  )
}
export default Login;