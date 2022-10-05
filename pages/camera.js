import { useState, useEffect } from 'react'

export default function Camera() {
  
  const [resultsVisible, setResultsVisible] = useState(false)
  const [cameraVisible, setCameraVisible] = useState(true)
  const [personalInfoVisible, setPersonalInfoVisible] = useState(false)

  useEffect(() => {
    if (cameraVisible) {
      setResultsVisible(false)
      setPersonalInfoVisible(false)
    }
  }, [cameraVisible])

  useEffect(() => {
    if (resultsVisible) {
      setCameraVisible(false)
      setPersonalInfoVisible(false)
    }
  }, [resultsVisible])

  useEffect(() => {
    if (personalInfoVisible) {
      setCameraVisible(false)
      setResultsVisible(false)
    }
  }, [personalInfoVisible])

  return (
    <div className='h-screen w-full'>
      { 
        resultsVisible 
        ? <div className='h-screen w-full'>
            Results 
          </div>
        : <div className='h-0 w-0 invisible'>
            Results 
          </div>
      }
      {
        cameraVisible
        ? <div className='h-screen w-full'>
            Camera
          </div>
        : <div className='h-0 w-0 invisible'>
            Camera
          </div>
      }
      {
        personalInfoVisible
        ? <div className='h-screen w-full'>
            Personal info
          </div>
        : <div className='h-0 w-0 invisible'>
            Personal info
          </div>
      }
    </div>
  )
}