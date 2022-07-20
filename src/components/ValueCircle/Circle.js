import React from 'react'
import './Circle.css'

const Circle = (props)=>{
    return(
        <div>
            <div className='circle'>
                <img src={props.Path}></img>
            </div>
            <div className='circle-box'>
                <h4>{props.Type}</h4>
                <h6>{props.Description}</h6>
            </div>
        </div>
    )
}

export default Circle