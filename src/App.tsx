import React, { useState } from 'react';

function App() {
  const [showContent,setContent]=useState<boolean>(false)
  
  return (
    <div className="App">
      <h1>Задание 1</h1>
      <button onClick = {()=>setContent(!showContent)}>{showContent?'скрыть':'Показат'}</button>
      {showContent && <p>текстовы блок</p>}
    </div>

    
  );
}

export default App;
