import React from 'react'
import './MainPage.css'

function MainPage(props) {

    const chapter = props.music.map(c=><div>
        <audio controls>
            <source src={c} type='audio/mpeg'/>
        </audio>
    </div>)



    return (
        <div className='mainPage'>
            <div className="book__title">
                <h2>{props.name}</h2>
            </div>
            <div className="book__content">
                <div className="book__image">
                    <img src={props.image} alt=""/>
                </div>
                <div className="book__summary">
                    <h3>Summary</h3>
                    <p>{props.summary}</p>
                </div>   
            </div>
            <div className="book__chapters">
            <h2>Chapters</h2>
                {chapter}
            </div>
        </div>
    )
}

export default MainPage
