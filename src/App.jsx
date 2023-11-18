import React, {useState} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RoadMap from './../components/RoadMap';
import LandingPage from './../components/LandingPage';
import {BrowserRouter,Routes,Route} from "react-router-dom"; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <BrowserRouter> 
      <Routes> 
        <Route exact path="/" element={<LandingPage/>}/> 
        <Route exact path="/roadmap" element={<RoadMap/>}/> 
      </Routes> 
      </BrowserRouter> 
      </> 
  )
}

export default App
