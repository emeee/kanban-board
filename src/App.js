import React, {useState} from 'react';
import './App.css';
import Column from "./components/column/Column";
import logo from './assets/hr_logo.png';

const initialBoard = [
  {
    title: 'Backlog',
    tasks: [{
      title: "Task 1",
    }]
  }, {
    title: 'To Do',
    tasks: []
  }, {
    title: 'Ongoing',
    tasks: []
  }, {
    title: 'Done',
    tasks: []
  }
]

const App = () => {

  const [newTask, setNewTask] = useState("");
  const [board, setBoard] = useState(initialBoard);

  const onNext = (columnId, taskId) => {
    if(columnId > board.length) return null;

    // TODO: Implement
  }

  const onBack = (columnId, taskId) => {
    if(columnId <= 0) return null;

    // TODO: Implement
  }

  const onDelete = (columnId, taskId) => {
    const newBoard = [...board];
    newBoard[columnId].tasks.splice(taskId, 1);
    setBoard(newBoard);
  }

  const createTask = (name) => {
    const newBoard = [...board];
    newBoard[0].tasks.push({ title: name });
    setBoard(newBoard);
    setNewTask("");
  }

  const onChangeNewTask = event => {
    setNewTask(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="HR" className="App-header-logo"/>
        <span className="App-header-title">Kanban Board</span>
      </header>
      <div className="App-content container">
        <div className="App-input">
          <input
            className="App-input-text"
            type="text"
            name="name"
            value={newTask}
            placeholder="New task name"
            onChange={onChangeNewTask}
          />
          <input
            className="App-input-button"
            disabled={!newTask || newTask === ""}
            type="submit"
            value="Create task"
            onClick={() => createTask(newTask) }/>
        </div>
        <div className="row">
          {board && board.map((column,index) =>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <Column
                id={index}
                title={column.title}
                tasks={column.tasks}
                onBack={onBack}
                onNext={onNext}
                onDelete={onDelete}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
