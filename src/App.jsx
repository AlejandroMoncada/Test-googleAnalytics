import './App.css'
import {ContactUs} from './ContactUs'
import ReactGA from 'react-ga4'


function App() {
  const TRACKING_ID = 'UA-250149670-2'
  ReactGA.initialize(TRACKING_ID)
  
  return (
    <>
      <ContactUs/>
    </>
  )
}

export default App
