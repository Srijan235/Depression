import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Questionnaire from './Questionnaire'
import LandingPage from './LandingPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/questionnaire" element={<Questionnaire/>} />
       
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
