import React from 'react'
import {data} from "./Data"
import {CiLocationOn} from "react-icons/ci"

const LandingPage = () => {
  return (
    <div className='landing-page'>
        <h1>Welcome to Trip Advisor</h1>
        <p>Top continent for your next holiday</p>
        <ul className='continent_items'>
            {data.continents.map(continent => (
                <li className='continent_list'>
                  <img src = {continent.image} width= "300" height= "300"/>
                  <div className='continent_location'>
                  <p><span><CiLocationOn/></span> {continent?.name}</p>
                  </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default LandingPage