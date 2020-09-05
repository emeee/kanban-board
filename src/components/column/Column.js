import React, { useState } from 'react';
import './column.css';
import leftArrow from "../../assets/left-arrow.svg"
import rightArrow from "../../assets/right-arrow.svg"
import trash from "../../assets/trash.svg"

const Column = ({ title, tasks }) => {
    return (
        <div className="column-container">
            <div className="column-name">
                <span>{ title }</span>
            </div>
            {(tasks && tasks.length > 0) && (
                <div className="tasks-container">
                    {tasks.map(task => (
                        <Task title={task.title} />
                    ))}
                </div>
            )}
        </div>
    )
}

const Task = ({ title }) => {
    return (
        <div className="task">
                <span>{title}</span>
                <div className="actions-container">
                    <img src={leftArrow} alt="Back" className="action-icon" />
                    <img src={rightArrow} alt="Next" className="action-icon" />
                    <img src={trash} alt="Delete" className="action-icon" />
                </div>
        </div>
    );
}

export default Column;