import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";


const Login = () => {
  const dispatch = useDispatch();

  

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
  };

  return (
    <div>

    </div>
  )
}
export default Login;