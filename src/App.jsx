import './App.css'
import ReactGA from 'react-ga'
import {ContactUs} from './ContactUs'


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
