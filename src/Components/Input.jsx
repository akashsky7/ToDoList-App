import React, { useState } from 'react';


function Input(props){
    const [inputField, setInputField] = useState("");

    function handleInputField(event){
        console.log("Input Field", event.target.value)
        setInputField(event.target.value)
    }

    return(
        <div className='inputArea'>
            <form>
                <input className='inputBox' type='text' placeholder='Enter Todo' name='todo' onChange={handleInputField} value={inputField} />
                <button className='buttonBox' style={{marginLeft: '20px'}} type='submit' onClick={(event)=>{
                    event.preventDefault();
                    props.onAdd(inputField)
                    setInputField("")
                }}>Add Todo</button>
                </form>
        </div>
    )
}

export default Input;