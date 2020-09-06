import React from 'react';
import './column.css';
import leftArrow from "../../assets/left-arrow.svg"
import rightArrow from "../../assets/right-arrow.svg"
import trash from "../../assets/trash.svg"

const Column = ({id, title, tasks, onBack, onNext, onDelete}) => {
  return (
    <div className="column-container">
      <div className="column-name">
        <span>{title}</span>
      </div>
      {(tasks && tasks.length > 0) && (
        <div className="tasks-container">
          {tasks.map((task, index) => (
            <Task
              id={index}
              title={task.title}
              columnId={id}
              onBack={onBack}
              onNext={onNext}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}

const Task = ({id, title, columnId, onBack, onNext, onDelete}) => {
  return (
    <div className="task">
      <span>{title}</span>
      <div className="actions-container">
        <img src={leftArrow} alt="Back" className="action-icon" onClick={() => onBack(columnId, id)}/>
        <img src={rightArrow} alt="Next" className="action-icon" onClick={() => onNext(columnId, id)}/>
        <img src={trash} alt="Delete" className="action-icon" onClick={() => onDelete(columnId, id)}/>
      </div>
    </div>
  );
}

export default Column;