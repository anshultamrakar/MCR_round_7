import React from 'react'
import LandingPage from './LandingPage';
import Countries from './Countries';
import {Routes , Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
       <Route path = "/" element = {<LandingPage/>}/> 
       <Route path = "/countries" element = {<Countries/>}/> 
      </Routes>
    </div>
  );
}

export default App;
