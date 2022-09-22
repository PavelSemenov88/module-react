import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import Form from "./Form";

const SignUp = () => {
  return (
    <Form
      title={'register'}
      handle
    />
  )
}

export default SignUp;