import './button-input.scss';

function ButtonInput({text, onClick}) {
  return (
    <div className="button-input">
      {text}
    </div>
  )
}

export default ButtonInput;