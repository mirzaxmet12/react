import React,{FC} from 'react';



interface Props{
    isLoggedIn:boolean
}

const ConditionalRendering:React.FC<Props>=({isLoggedIn})=>{
    return(
        <div>
            <h2>{isLoggedIn ? 'С возвращением':'Войдите, пожалуйста'}</h2>
        </div>
    )
}

export default ConditionalRendering;
