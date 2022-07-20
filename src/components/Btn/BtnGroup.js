import React from 'react'
import Button from 'react-bootstrap/Button'
import './Btn.css'

const BtnGroup = (props)=>{
    return(
        <div>
            <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
            </ButtonGroup>
        </div>
    )
}

export default BtnGroup