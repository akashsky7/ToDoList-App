import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import NightsStayIcon from '@mui/icons-material/NightsStay';

function Heading(){
    function greeting(){
        const hours = new Date().getHours();        
        if(hours>5 && hours<12){
           return 'Morning'
        }else if(hours>=12 && hours < 17){
            return 'Afternoon'
        }else{
            return 'Evening'
        }
    }

    function icon(){
        const hours = new Date().getHours();        
        if(hours>5 && hours<12){
           return <WbTwilightIcon fontSize='large' />
        }else if(hours>=12 && hours < 17){
            return <WbSunnyIcon fontSize='large' />
        }else{
            return <NightsStayIcon fontSize='large' />
        }
    }
   

    return(
        <div className='heading'>
            <h1>{icon()} Good {greeting()}</h1>
            <h3>What's the plan for today?</h3>
        </div>
    )
}

export default Heading;