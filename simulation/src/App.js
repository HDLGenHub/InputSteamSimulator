import logo from './logo.svg';
import './App.css';
import Simulator from './Simulator';
import { useState } from 'react';

function App() {
  const [data, setData] = useState();
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="Input-container">
          <input onChange={(e)=>setData(e.target.value)}></input>
        </div>
        <div className="Simulator-container">
          <Simulator Data ={data}/>
        </div>
      </header>
    </div>
  );
}

export default App;
