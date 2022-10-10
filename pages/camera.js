import { useState, useRef } from 'react'
import Image from 'next/image'
import React from 'react'
import Webcam from "react-webcam"

export default function Camera() {

  const [videoConstraints, setVideoConstraints] = useState({
    width: 1280,
    height: 720,
    facingMode: "user",
  })

  const [imageSrc, setImageSrc] = useState(null)

  const webcamRef = useRef(null)

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImageSrc(imageSrc)
    console.log(imageSrc)
  }, [webcamRef, setImageSrc])

  return (
    <div className='flex flex-row h-screen w-full items-center justify-center bg'>
      <div className="absolute -z-10 text-center w-full ">
        <Webcam 
          className='h-full w-full'
          mirrored={true}
          screenshotFormat="image/jpeg"
          audio={false}
          videoConstraints={videoConstraints} 
          ref={webcamRef}
        />
      </div>
      <div className='block fixed h-24 inset-x-0 bottom-0 z-10 bg-black'>
        <div className='flex justify-center h-full items-center'>
          <div className='justify-center inline-block text-center text-white z-10'>
            <button className='rounded-full' onClick={capture}>
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
            <div className="results fixed top-0 right-[-100%] h-full w-full transition-all duration-500 ease-in-out items-center">
              <div className='absolute top-[10%] self-center h-auto justify-center flex flex-col text-black p-4 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-black sm:w-11/12 sm:left-[4.16%] xl:left-1/4 xl:w-1/2'>
                {
                  imageSrc && (
                    <Image src={imageSrc} width={1280} height={720} alt="Your picture"/>
                  )
                }
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