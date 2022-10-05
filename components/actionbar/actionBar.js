export default function ActionBar({ handleResultsClick, handleCameraClick, handlePersonalInfoClick }) {
  return (
    <div className='w-full overflow-hidden fixed bottom-0'>
      <ul className='flex flex-row'>
        <li>
          <button 
            onClick={handleResultsClick}
          >
            Results
          </button>
        </li>
        <li>
          <button
            onClick={handleCameraClick}
          >
            Camera
          </button>
        </li>
        <li>
          <button
            onClick={handlePersonalInfoClick}
          >
            Personal Info
          </button>
        </li>
      </ul>
    </div>
  )
}