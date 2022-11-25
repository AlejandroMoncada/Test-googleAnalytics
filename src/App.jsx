import { ContactUs } from './Analytics'
import './App.css'
import ReactGA from 'react-ga'

function App() {
  const TRACKING_ID = 'UA-250149670-1'
  ReactGA.initialize(TRACKING_ID)
  return (
    <>
    <ContactUs/>
    </>
  )
}

export default App
