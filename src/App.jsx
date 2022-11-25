import { ContactUs } from './Analytics'
import './App.css'
import ReactGA from 'react-ga'

function App() {
  const TRACKING_ID = 'UA-250149670-2'
  ReactGA.initialize(TRACKING_ID)
  return (
    <>
    <h1>Hola mundo</h1>
    <ContactUs/>
    </>
  )
}

export default App
