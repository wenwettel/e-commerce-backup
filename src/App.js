import Navbar from './components/Navbar';
import Counter from './components/Counter';
import CustomInput from './components/CustomInput/CustomInput';
import { useState, useEffect } from 'react';
import Button from './components/Button/Button';
function App() {
  const [isShow, setIsShow] = useState(false);
  const handleShowCounter = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="App">
      <Navbar />
      <Button onClick={handleShowCounter}>Contador</Button>
      {isShow && <Counter />}
      <CustomInput />
    </div>
  );
}

export default App;
