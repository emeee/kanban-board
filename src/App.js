import React from 'react';
import './App.css';
import Column from "./components/column/Column";
import logo from './assets/hr_logo.png';

const board = [
    {
        title: 'Backlog',
        tasks: [{
            "id": 1,
            "title": "Task 1",
        }]
    }, {
        title: 'To Do',
        tasks: []
    },  {
        title: 'Ongoing',
        tasks: []
    }, {
        title: 'Done',
        tasks: []
    }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
              <img src={logo} alt="HR" className="App-header-logo"/>
              <span className="App-header-title">Kanban Board</span>
      </header>
      <div className="App-content container">
          <div className="row">
              {board && board.map(column =>
                  <div className="col-sm-12 col-md-3 col-lg-3">
                      <Column title={column.title} tasks={column.tasks}/>
                  </div>
              )}
          </div>
      </div>
    </div>
  );
}

export default App;
