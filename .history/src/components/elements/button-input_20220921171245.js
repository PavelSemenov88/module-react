import './button-input.scss';

function ButtonInput({text, onClick}) {
  return (
    <div className="button-input">
      {text}
      {onClick}
    </div>
  )
}

export default ButtonInput;