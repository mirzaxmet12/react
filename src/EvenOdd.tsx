import React from 'react';

const EvenOdd:React.FC<{number:number}> = (props) => {
  return (
    <>
      <p>{props.number}</p>
      <p>{props.number % 2 === 0 ? 'четным' : 'нечетным'}</p>
    </>
  );
};

export default EvenOdd;
