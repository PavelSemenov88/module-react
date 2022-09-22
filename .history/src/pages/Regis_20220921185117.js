import './Regis.scss';
import ButtonInput from '../components/elements/button-input';
import { Link } from 'react-router-dom';
import SignUp from 'components/SignUp';

function Regis() {
  return (
    <div className="regis">
      <form autoComplete='on' className="regis__form">
        <Link to="/auth" className="regis__form-link" href="">Авторизоваться</Link>
        <h2 className="regis__form-title">регистрация</h2>

        <SignUp/>
        
      </form>

    </div>
  )
}

export default Regis;