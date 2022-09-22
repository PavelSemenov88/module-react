import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import Form from "./Form";

const SignUp = () => {
  return (
    <Form
      title={'register'}
      handleClick
    />
  )
}

export default SignUp;