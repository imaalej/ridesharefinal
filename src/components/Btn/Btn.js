import React from 'react'
import Button from 'react-bootstrap/Button'
import './Btn.css'

const Btn = (props)=>{
    return(
        <div>
            <Button variant="primary">{props.Value}</Button>{' '}
        </div>
    )
}

export default Btn