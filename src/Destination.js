import React from 'react'
import { data } from './Data'
import { useParams } from 'react-router-dom'

const Destination = () => {
 let {destination} = useParams()


 const myDestination = data.continents.find(item => item.id === Number(destination))?.countries?.find(item => item.id === Number(destination))?.destinations
 console.log(myDestination)
  return (
    <div className='destination'>
        <h4>Top Places to visit </h4>
        <ul className='destination_items'>
            {myDestination?.map(destination => (
                <li>
                    <img src = {destination?.image} width = "350" height= "350"/>
                    <div>
                        <p>{destination?.name}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Destination