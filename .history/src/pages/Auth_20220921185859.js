import './Auth.scss';
import ButtonInput from '../components/elements/button-input';
import { Link } from 'react-router-dom';
import Login from 'components/Login';

function Auth() {
  return (
    <div className="auth">
      <form autoComplete='on' className="auth__form">
        <Link to="/regis" className="auth__form-link" href="">Зарегистрироваться</Link>
        <h2 className="auth__form-title">вход</h2>


        <Login/>
  
      </form>

    </div>
  )
}

export default Auth;