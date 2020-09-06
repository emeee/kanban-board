import React, {useState} from 'react';
import './App.css';
import Column from "./components/column/Column";
import logo from './assets/hr_logo.png';

const INITIAL_COLUMN_INDEX = 0;

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
    if(columnId > board.length - 1) return null;

    const taskName = board[columnId].tasks.find((task, index) => index === taskId).title;

    deleteTask(columnId, taskId);
    createTask(columnId + 1, taskName);
  }

  const onBack = (columnId, taskId) => {
    if(columnId <= 0) return null;

    const taskName = board[columnId].tasks.find((task, index) => index === taskId).title;

    deleteTask(columnId, taskId);
    createTask(columnId - 1, taskName);
  }

  const deleteTask = (columnId, taskId) => {
    const newBoard = [...board];
    newBoard[columnId].tasks.splice(taskId, 1);
    setBoard(newBoard);
  }

  const createTask = (columnId, name) => {
    const newBoard = [...board];
    newBoard[columnId].tasks.push({ title: name });
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
            onClick={() => createTask(INITIAL_COLUMN_INDEX, newTask) }/>
        </div>
        <div className="row">
          {board && board.map((column, index) =>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <Column
                id={index}
                title={column.title}
                tasks={column.tasks}
                onBack={onBack}
                onNext={onNext}
                onDelete={deleteTask}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
