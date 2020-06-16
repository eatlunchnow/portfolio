import React from 'react';


import CardDisplay from '../components/CardDisplay';


function Experience(props){
    return(
       <div className='justify-content-center'>
           {props.title && <h1 className='display-1' style={{textAlign: 'center'}}>{props.title}</h1>}
           <CardDisplay />
       </div> 
      
    )
}

export default Experience;