import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useHistory }
import { useDispatch } from "react-redux";
import { setUser } from "store/reducers/userSlice";
import Form from "./Form";

const SignUp = () => {
  const dispatch = useDispatch();
  const {push} = useHistory

  

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }))
      })
      .catch(console.error)
  };
  return (
    <Form
      title={'register'}
      handleClick={handleRegister}
    />
  )
}

export default SignUp;