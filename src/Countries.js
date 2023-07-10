import React from 'react'
import {data} from "./Data"
import { useParams , Link } from 'react-router-dom'
import {CiLocationOn} from "react-icons/ci"

const Countries = () => {
  let {countryId} = useParams()
  const myCountryData = data.continents.find(item => item.id === Number(countryId))
  return (
    <div className='country'>
    <h4>Top Countries to visit in India</h4>
      <ul className='country_items'>
       {myCountryData.countries.map(country => (
        <li className='countries_list'>
          <Link to = {`/countries/${countryId}/${country?.id}`}>
          <img src = {country?.image} width= "350" height= "350"/>
          </Link>
         <div>
         <p><span><CiLocationOn/></span> {country?.name}</p>
         </div>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Countries