import React from 'react'

function AudioDashboard(props) {

    {console.log("props",props)}

    const audio = props.data[0].music;
    console.log(audio)
    const chapter = props.data.map(c=> console.log(c))

    return (
        <div>
            {
                /* {audio.map(a=> <>  <div className='mainPage'>
            <div className="book__title">
                <h2>{a.name}</h2>
            </div>
            <div className="book__content">
                <div className="book__image">
                    <img src={a.image} alt=""/>
                </div>
                <div className="book__summary">
                    <h3>Summary</h3>
                    <p>{a.summary}</p>
                </div>   
            </div>
            <div className="book__chapters">
            <h2>Chapters</h2>
                {chapter}
            </div>
        </div> </>)} */
        }
        </div>
    )
}

export default AudioDashboard
