import './add-button.css';

function AddButton() {
  return (
    <div className="add-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="14.5" stroke="white" />
        <path d="M15 9.28564V20.3571" stroke="white" stroke-width="2" stroke-linecap="round" />
        <path d="M20.3569 14.8214L9.28551 14.8213" stroke="white" stroke-width="2" stroke-linecap="round" />
      </svg>
    </div>
  )
}

export default AddButton;