import { useState, useRef } from 'react'
import React from 'react'
import Webcam from "react-webcam"
import { isMobile } from "react-device-detect"

export default function Camera() {

  const [videoConstraints, setVideoConstraints] = useState({
    width: 1280,
    height: 720,
    facingMode: "user",
  })

  const [alert, setAlert] = useState(false)
  const [imageSrc, setImageSrc] = useState(null)
  const [isMirrored, setIsMirrored] = useState(true)

  const webcamRef = useRef(null)

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImageSrc(imageSrc)
    setAlert(true)
    // dissapear alert after 3 seconds
    setTimeout(() => {
      setAlert(false)
    }, 2000)
    
  }, [webcamRef, setImageSrc])

  const changeCamera = () => {
    if (videoConstraints.facingMode === "user") {
      setVideoConstraints({
        width: 1280,
        height: 720,
        facingMode: "environment",
      })
      isMirrored(false)
    } else {
      setVideoConstraints({
        width: 1280,
        height: 720,
        facingMode: "user",
      })
      isMirrored(true)
    }
  }

  return (
    <div className='flex flex-row min-h-screen w-full items-center justify-center bg'>
      {alert && (
        <div className="text-xl font-bold absolute top-10 xl:w-1/2 sm:w-4/5 text-black p-4 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-black ease-in-out duration-200">
          Picture Taken
        </div>
      )}
      <div className="absolute -z-10 text-center w-full ">
        <Webcam 
          className='h-full w-full'
          mirrored={isMirrored}
          screenshotFormat="image/jpeg"
          audio={false}
          videoConstraints={videoConstraints} 
          ref={webcamRef}
        />
      </div>
      <div className='block fixed h-24 inset-x-0 bottom-0 z-10 bg-black'>
        <div className='flex justify-center h-full items-center'>
          {
            isMobile
            ? <button className="menu-btn absolute left-5 top-6 z-30 text-xl  cursor-pointer transition-all duration-500 ease-in-out text-white items-center" onClick={changeCamera}>
                <svg className="fill-white" width="50px" height="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <title>ionicons-v5-e</title>
                  <path d="M432,144H373c-3,0-6.72-1.94-9.62-5L337.44,98.06a15.52,15.52,0,0,0-1.37-1.85C327.11,85.76,315,80,302,80H210c-13,0-25.11,5.76-34.07,16.21a15.52,15.52,0,0,0-1.37,1.85l-25.94,41c-2.22,2.42-5.34,5-8.62,5v-8a16,16,0,0,0-16-16H100a16,16,0,0,0-16,16v8H80a48.05,48.05,0,0,0-48,48V384a48.05,48.05,0,0,0,48,48H432a48.05,48.05,0,0,0,48-48V192A48.05,48.05,0,0,0,432,144ZM316.84,346.3a96.06,96.06,0,0,1-155.66-59.18,16,16,0,0,1-16.49-26.43l20-20a16,16,0,0,1,22.62,0l20,20A16,16,0,0,1,196,288a17.31,17.31,0,0,1-2-.14,64.07,64.07,0,0,0,102.66,33.63,16,16,0,1,1,20.21,24.81Zm50.47-63-20,20a16,16,0,0,1-22.62,0l-20-20a16,16,0,0,1,13.09-27.2A64,64,0,0,0,215,222.64,16,16,0,1,1,194.61,198a96,96,0,0,1,156,59,16,16,0,0,1,16.72,26.35Z"/>
                </svg>
              </button>
            : null
          }
          <div className='justify-center inline-block text-center text-white z-10'>
            <button className='rounded-full active:bg-slate-500' onClick={capture}>
              <svg width="72px" height="72px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg">
                <g id="color">
                  <circle cx="255" cy="255" r="255"/>
                </g>
                <g id="line">
                  <circle cx="36" cy="36.0001" r="28" fill="currentColor" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
                </g>
              </svg>
            </button>
          </div>
          <div className='justify-center inline-block text-center items-center'>
            <input type='checkbox' id='active' className='hidden' />
            <label for="active" className="menu-btn absolute right-5 top-6 z-30 text-xl  cursor-pointer transition-all duration-500 ease-in-out text-white items-center">
              <svg width="50px" height="50px" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">]
                <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)">
                  <path d="m.5 12.5v-10c0-1.1045695.8954305-2 2-2h10c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2z"/>
                  <path d="m12.5 12.5v-10c0-1.1045695-.8954305-2-2-2h2c1 0 2 .8954305 2 2v10c0 1.1045695-1 2-2 2h-2c1.1045695 0 2-.8954305 2-2z" fill="currentColor"/>
                  <path d="m7.5 10.5 3-3-3-3"/><path d="m10.5 7.5h-8"/>
                </g>
              </svg>
            </label>
            <div className="results fixed top-0 right-[-100%] min-h-full w-full transition-all duration-500 ease-in-out items-center">
              <div className='absolute self-center h-[80vh] justify-center flex flex-col text-black p-4 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-black sm:w-11/12 sm:left-[4.16%] sm:top-8 xl:left-1/4 xl:w-1/2 lg:top-[1%]'>
                <h3 className="text-5xl text-black font-bold p-8">
                  Your photo, is it a hot dog?  
                </h3>
                {
                  imageSrc && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={imageSrc} alt="Your picture" className='object-scale-down'/>
                  )
                }
                <p className="text-xl p-8">Result: No!</p>
              </div>
              <div className='block fixed h-24 inset-x-0 bottom-0 z-10 bg-black'>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}