import React, {useState} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RoadMap from './../components/RoadMap';
import LandingPage from './../components/LandingPage';
import Page from './../components/Page';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import jsonData from './data.json'; // Import the JSON data

function App() {
  const [count, setCount] = useState(0)
  const firstLesson = jsonData.lessonPlans[0]

  return (
    <> 
      <BrowserRouter> 
      <Routes> 
        <Route exact path="/" element={<LandingPage/>}/> 
        <Route exact path="/roadmap" element={<RoadMap data={jsonData}/>}/> 
      </Routes> 
      </BrowserRouter> 
      </>

    /*<LandingPage/>*///<RoadMap data={jsonData}/>
    // <RoadMap lesson={firstLesson}/>
    // <Page lessonPlan={firstLesson}/>
  )
}

export default App
