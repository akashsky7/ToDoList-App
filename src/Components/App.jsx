import React, { useState } from 'react'
import Input from './Input';
import Lists from './Lists';
import Heading from './Heading';


function App(){
    const [listitems, addListitems] = useState([]);
    
    function handleEntry(inputField){
        console.log("handleEntry",inputField)
        addListitems((prvValue)=>{
            return [...prvValue, inputField]
        })
    }

    // function handleArrange(id){
    //     console.log('handleArrange',id)
    //     // const value = listitems[id]
    //     // addListitems((prvValue)=>{
    //     //     const filtered = prvValue.filter((item,index)=>{
    //     //         return index !== id
    //     //     })
    //     //     return [...filtered, value]
    //     // })
    // }

    function clearItem(id){
        addListitems((prvValue)=>{
            return prvValue.filter((item,index)=>{
                return index !== parseInt(id)
             })
             
         })
          
    }

    return(
        <div className='container'>
            <Heading />
            <Input onAdd={handleEntry} />
            <div className='listBox'>
                <ul className='unorderedBox'>
                    {listitems.map((item, index)=>{
                        return <Lists key={index} listitem={item} onChecked={clearItem} id={index}  />
                    })}
                </ul>
            </div>
            
        </div>
    )
}

export default App;