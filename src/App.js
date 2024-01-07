import './App.css';
import Navbar from './components/Navbar';
import Counter from './components/Counter';

function App() {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div className="App">
      <Navbar />
      <Counter />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
