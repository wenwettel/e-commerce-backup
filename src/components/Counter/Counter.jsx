import './counterStyle.css';
import { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const handleAdd = () => {
    setNumber(number + 1);
  };

  const handleSubstract = () => {
    setNumber(number - 1);
  };
  return (
    <div className="counter">
      <p>{number}</p>
      <button onClick={handleSubstract}>-</button>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}

export default Counter;
