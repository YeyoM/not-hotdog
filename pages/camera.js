import { useState, useEffect } from 'react'
import ActionBar from '../components/actionbar/actionBar'

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

  const handleResultsClick = () => {
    setResultsVisible(true)
  }

  const handleCameraClick = () => {
    setCameraVisible(true)
  }

  const handlePersonalInfoClick = () => {
    setPersonalInfoVisible(true)
  }

  return (
    <div className='flex flex-row h-screen w-full '>
      <input type='checkbox' id='active' className='hidden' />
      <label for="active" class="menu-btn">
        Abrir
      </label>
      <label for="active" class="close"></label>
      <div class="results">
        Results 
      </div>
      <div class="camera">
        Camera
      </div>
    </div>
  )
}