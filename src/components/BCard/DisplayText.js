import React, {useState} from 'react'
import './DisplayText.css'
import CloseButton from 'react-bootstrap/CloseButton';

const DisplayText = (props)=>{

    const [inputValue, setInputValue] = useState(props.InputText)

    const handleInputChange = (event)=>{
        setInputValue(event.target.value)
    }

    const onClickClear = () =>{
        setInputValue("")
    }

    return(
        <div>
            <p className='display-label'>{props.DisplayText}</p>
            <div className='display-box'>
                <p className='display-label'>{props.Label}</p>
            </div>
           
        </div>
    )
}

export default DisplayText