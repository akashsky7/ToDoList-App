import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';

function Lists(props){
    

    // function handleListClick(){
    //     if(checked){
    //         setChecked(false)
    //         console.log(props.id)
    //     }else{
    //         setChecked(true)
    //         console.log(props.id)
            
    //     }
    // }
    return(
        <div className='mapDiv'>
            <div className='listitemBox'>
                <li>{props.listitem}</li>
                
            </div>  
            <ClearIcon style={{cursor: 'pointer'}}  onClick={() => {
                props.onChecked(props.id);
            }}/>   
        </div> 
    )
}

export default Lists;