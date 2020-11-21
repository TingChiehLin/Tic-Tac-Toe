import logo from './logo.svg';
import './App.css';
import Board from './Board/Board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Tic-Tae-Toe
        </h2>
      </header>
      <Board />
    </div>
  );
}

export default App;
