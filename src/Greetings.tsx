import React from 'react';

const Greetings:React.FC<{name:string}>=(props)=>{
    return(
      <p>Привет {props.name}</p>
    )
}
export default Greetings