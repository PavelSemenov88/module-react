import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";


const Login = () => {
  const dispatch = useDispatch();

  const auth = getAuth();

  const handleLogin = () => {};

  return (
    <div>

    </div>
  )
}
export default Login;