import Legs from './components/Legs';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <div className="App">
        <h1>Leg Feature</h1>
        <Legs />
      </div>
    </Fragment>
  );
}

export default App;
