import React from 'react'
import AudioDashboard from './AudioDashboard'
import './Cards.css'
import {Link, useHistory} from 'react-router-dom'
import MainPage from './MainPage'

function Cards(props) {

   

    return (
        <div className='cards'>
            <div className="card__image">
                <img src={props.image} alt=""/>
            </div>
            <div className="card__title">
                <h1>{props.name}</h1>
            </div>
            <div className="card__button">
                <Link to='/audioDashboard'><button >Explore</button></Link>
            </div>  
            
            
        </div>
    )
}
export default Cards


