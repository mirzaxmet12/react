import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EvenOdd from './EvenOdd';
import Counter from './Counter';
import HoverMessage from './HoverMessage';
import Form from './Form';
import Greetings from './Greetings';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <div>
      <EvenOdd number={5} /> 
      <EvenOdd number={6} /> 
    </div>
    <Counter/>  
    <HoverMessage/>
    <Form/>
    <div>
      <Greetings name='Анвар'/>
    </div>
  </React.StrictMode>
);

reportWebVitals();
