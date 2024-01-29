import React,{useState} from 'react';

function Counter(){
    let [count,setCount] = useState<number>(0)
    
function plusCount(){
    setCount((i)=>i+1)
}
function minusCount(){
    setCount((i)=>i-1)
}


    return(
        <div>
            <button onClick={plusCount}>+</button>
            <p>{count}</p>
            <button onClick={minusCount}>-</button>
        </div>
    )
}
export default Counter