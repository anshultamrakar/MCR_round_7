import React from 'react'
import LandingPage from './LandingPage';
import Countries from './Countries';
import Destination from './Destination';
import {Routes , Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
       <Route path = "/" element = {<LandingPage/>}/> 
       <Route path = "/countries/:countryId" element = {<Countries/>}/> 
       <Route path = "/countries/:countryId/:destination" element = {<Destination/>}/> 
      </Routes>
    </div>
  );
}

export default App;
