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
import ProductCard from './tovar';
import TasksList from './TaskList';
import ConditionalRendering from './ConditionalRendering';


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
    <div>
      <h1>Product Catalog</h1>
      <ProductCard
        name="Smartphone"
        price={299.99}
        description="A powerful smartphone with advanced features."
      />
      <ProductCard
        name="Laptop"
        price={899.99}
        description="A high-performance laptop for work and entertainment."
      />
      <TasksList/>
      <ConditionalRendering isLoggedIn={true}/>
      <ConditionalRendering isLoggedIn={false}/>
    </div>
  </React.StrictMode>
);

reportWebVitals();
