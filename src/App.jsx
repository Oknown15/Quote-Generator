import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import './components/Accordion.css'
import Welcome from './components/welcome'
import Accordion from './components/Accordion';
import Quote from './components/Quote'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'
// import Randomquotes from './components/RandomQuotes/Randomquotes';
import Testing from './components/Randomquotes/Testing';


function App() {

  return (
    <>
    {/* <Randomquotes/> */}
    <Quote></Quote>
    {/* <FontAwesomeIcon onClick={() => {random()}} className='icons' icon={faRotate} size='lg'/> */}
    {/* <Accordion ></Accordion> */}
    {/* <Welcome/> */}
    {/* <Testing colors={["green", "blue", "red"]}/> */}

    </>
  )
}



export default App
