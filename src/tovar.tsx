import React from 'react';

interface Props{
    name:string,
    price:number,
    description:string
}

const ProductCard:React.FC<Props> = ({ name, price, description }) => {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default ProductCard;
