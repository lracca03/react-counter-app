import React, { useState} from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  };
  
  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  }
  return (
    <div className="counter-container">
      <header className="App-header">
        <h1>Counter: {count}</h1>
        <div className="button-group">
          <button onClick={decrement} className="btn minus">-</button>
          <button onClick={increment} className="btn plus">+</button>
          <button onClick={reset} className="btn reset">Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
