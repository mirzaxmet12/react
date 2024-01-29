// import React,{useState} from 'react';
import React, { useState } from 'react';


function HoverMessage(){
const [showContent,setContent] = useState<boolean>(true)

    return(
        <div>
            <p 
            onMouseEnter={()=>setContent(!showContent)}
            onMouseLeave={()=>setContent(!showContent)}
            >{showContent?"Навели курсор наомпонент":'курсор'}</p>
        </div>
    )
}
export default HoverMessage
