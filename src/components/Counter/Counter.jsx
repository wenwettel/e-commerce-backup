import './counterStyle.css';
import { useState, useEffect } from 'react';
//elementos para explicar children (clase 5)
import Button from '../Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Counter() {
  const [number, setNumber] = useState(0);

  /*Ciclos del componente: mount- change - dismount*/
  /*useEffect(() => {
    console.log('montaje');
    console.log(`el componente se actualizo:${number} veces `);
    return () => {
     console.log('el componente se desmonto');
    };
   }, [number]);*/

  useEffect(() => {
    console.log(`El valor del contador es ${number}`);
  }, [number]);

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
      <Button text={'Aceptar'}>
        <CheckCircleIcon />
      </Button>
    </div>
  );
}

export default Counter;
