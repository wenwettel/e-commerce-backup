import { useEffect, useRef, useState } from 'react';

//comparar con el useState
function Input() {
  const [value, setValue] = useState('');

  const inputRef = useRef(null);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const clickInput = () => {
    console.log((inputRef.current.value = 'Habia una vez'));
  };

  useEffect(() => {
    // Enfoca el input cuando el componente se monta
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor="customInput">Ingresa algo:</label>
      <input
        id="customInput"
        onClick={clickInput}
        onChange={(e) => handleChange(e)}
        value={value}
      />
    </div>
  );
}

export default Input;
