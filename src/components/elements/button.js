import './button.scss';

function Button({url}) {
  return (
    <div className="button">
      <img src={url} alt="simbol" className=""/>
    </div>
  )
}

export default Button;