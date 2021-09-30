import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fib from './Fib';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Don't Learn React
          </a><br />
          <Fib />
        </header>
      </div>

  );
}

export default App;
