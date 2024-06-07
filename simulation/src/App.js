import logo from './logo.svg';
import './App.css';
import Simulator from './Simulator';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="Input-container">
          <input></input>
        </div>
        <div className="Simulator-container">
          <Simulator/>
        </div>
      </header>
    </div>
  );
}

export default App;
