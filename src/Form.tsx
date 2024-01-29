import React, { useState } from 'react';


function Form(){
    const [value,setValue]=useState<string>('')

    function handleSubmit(e:React.FormEvent){
        e.preventDefault()
        console.log(value);  
    }
    function  handleChange(e:React.ChangeEvent<HTMLInputElement>){
        setValue(e.target.value)
    }

    return(
        <div>
            <form  onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}/>
                <button>Отправить</button>
            </form>
        </div>
    )
}
export default Form