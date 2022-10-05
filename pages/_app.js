import MainLayout from '../components/main/mainLayoout'
import '../styles/globals.css'
import '../styles/camera.css'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
