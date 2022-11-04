import LegCard from './components/LegCard';
import Legs from './components/Legs';

function App() {
  console.log(process.env,"D")
  return (
    <div className="App">
      <h1>Leg Feature</h1>
      <Legs />
    </div>
  );
}

export default App;
