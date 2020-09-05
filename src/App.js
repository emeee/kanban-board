import React from 'react';
import './App.css';
import Column from "./components/column/Column";
import logo from './assets/hr_logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
              <img src={logo} alt="HR" className="App-header-logo"/>
              <span className="App-header-title">Kanban Board</span>
      </header>
      <div className="App-content">
            <Column title="Title" />
      </div>
    </div>
  );
}

export default App;
