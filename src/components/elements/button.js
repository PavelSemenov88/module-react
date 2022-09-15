import './button.scss';

function Button({url}) {
  return (
    <div className="add-button">
      <img src={url} alt="simbol" className="add-button__text"/>
    </div>
  )
}

export default Button;