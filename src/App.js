import React from 'react';
import './App.css';
import logo from './assets/hr_logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
              <img src={logo} alt="HR" className="App-header-logo"/>
              <span className="App-header-title">Kanban Board</span>
      </header>
      <div className="App-content">

      </div>
    </div>
  );
}

export default App;
