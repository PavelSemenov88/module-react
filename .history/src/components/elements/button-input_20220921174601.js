import './button-input.scss';

function ButtonInput({text}) {
  return (
    <div 
    {handleClick}
    className="button-input">
      {text}
    </div>
  )
}

export default ButtonInput;