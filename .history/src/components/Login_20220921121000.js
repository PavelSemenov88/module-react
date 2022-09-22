import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";


const Login = () => {
  const dispatch = useDispatch();

  

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
  };

  return (
    <div>

    </div>
  )
}
export default Login;