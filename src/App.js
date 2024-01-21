import Navbar from './components/Navbar';
import Counter from './components/Counter';
import { useState } from 'react';
import Button from './components/commons/Button/';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  const [isShow, setIsShow] = useState(false);
  const handleShowCounter = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Bienvenidos!" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
