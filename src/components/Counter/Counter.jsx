import './counterStyle.css';
//elementos para explicar children (clase 5)
import Button from '../commons/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useCount } from '../../hooks/useCount';
function Counter() {
  const { number, handleAdd, handleSubstract, handleReset } = useCount(
    0,
    0,
    10
  );

  /*Ciclos del componente: mount- change - dismount*/
  /*useEffect(() => {
    console.log('montaje');
    console.log(`el componente se actualizo:${number} veces `);
    return () => {
     console.log('el componente se desmonto');
    };
   }, [number]);*/

  return (
    <div className="counter">
      <p>{number}</p>
      <button onClick={handleSubstract}>-</button>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleReset}>Reset</button>
      <Button text={'Aceptar'}>
        <CheckCircleIcon />
      </Button>
    </div>
  );
}

export default Counter;
