import CartWidget from '../CartWidget';
import './navBarStyles.css';
import { useState } from 'react';

function Navbar() {
  /* el estado, la funcion y el span se crea para explicar 
 como un componente hijo para info a un componente padre */
  const [section, setSection] = useState('Inicio');
  const handleSection = (nameSection) => {
    setSection(nameSection);
  };

  return (
    <div className="navBar">
      <h1
        onClick={() => {
          handleSection('Inicio');
        }}
      >
        Wwettel <span>Ud esta en: {section}</span>
      </h1>
      <CartWidget handleSection={handleSection} number={4} />
    </div>
  );
}

export default Navbar;
