import { useState, useEffect } from 'react'
import Webcam from "react-webcam"

export default function Camera() {

  const [videoConstraints, setVideoConstraints] = useState({
    width: 1280,
    height: 720,
    facingMode: "user"
  })

  return (
    <div className='flex flex-row h-screen w-full items-center justify-center'>
      <input type='checkbox' id='active' className='hidden' />
      <label for="active" className="menu-btn absolute z-30 right-5 top-5 text-xl text-center cursor-pointer transition-all duration-300 ease-in-out text-white">
        Abrir
      </label>
      <label for="active" className="close z-20 w-full h-full pointer-events-none transition-all duration-700"></label>
      <div className="results fixed top-0 right-[-100%] h-full w-full transition-all duration-500 ease-in-out">
        Results 
      </div>
      <div className="absolute -z-10 text-center w-full ">
        <Webcam 
          className='h-full w-full'
          videoConstraints={videoConstraints} />
      </div>

    </div>
  )
}