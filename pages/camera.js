import { useState, useEffect } from 'react'
import Webcam from "react-webcam"

export default function Camera() {

  const [videoConstraints, setVideoConstraints] = useState({
    width: 1280,
    height: 720,
    facingMode: "user"
  })

  return (
    <div className='flex flex-row h-screen w-full '>
      <input type='checkbox' id='active' className='hidden' />
      <label for="active" className="menu-btn">
        Abrir
      </label>
      <label for="active" className="close"></label>
      <div className="results">
        Results 
      </div>
      <div className="camera">
        {/** <Webcam videoConstraints={videoConstraints} />*/}
      </div>
    </div>
  )
}