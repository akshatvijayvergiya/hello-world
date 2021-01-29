import React from 'react'
import Cards from './Cards'
import './CardContainer.css'
import {carList} from '../Utility'
function CardContainer() {

    

    const cars = carList.map(car=><Cards name={car.name} image={car.image} audio={car.audio}/>)


    
    

    return (
        <div className='cardContainer'>
        <div className="container__Header">
            <h1>Category Name</h1>
        </div>
        <div className="container__cards">
        {cars}
        </div>
            
        </div>
    )
}

export default CardContainer
