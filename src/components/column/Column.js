import React, { useState } from 'react';
import leftArrow from "../../assets/left-arrow.svg"
import rightArrow from "../../assets/right-arrow.svg"
import trash from "../../assets/trash.svg"

const Column = ({ title, tasks }) => {
    return (
        <div style = {{ width: 200, height: 500, background: 'white', textAlign: "center" }}>
            <div style={{ height: 100, width: "inherit", display: "table-cell", textAlign: "center", verticalAlign: "middle" }}>
                <span style={{ fontSize: 18 }}>{ title }</span>
            </div>
            <div>
                <Task title = "Task 1"/>
                <Task title = "Task 2"/>
            </div>
        </div>
    )
}

const Task = ({ title }) => {
    return (
        <div style={{ marginBottom: 5, padding: 10, background: "#efefef", clear: "both", textAlign: "left" }}>
                <span>{title}</span>
                <div style={{ float: "right" }}>
                    <img src={leftArrow} alt="Back" style={{ width: 15, height: 15, marginLeft: 4 }}/>
                    <img src={rightArrow} alt="Next" style={{ width: 15, height: 15, marginLeft: 4 }}/>
                    <img src={trash} alt="Delete" style={{ width: 15, height: 15, color: "red", marginLeft: 4 }}/>
                </div>
        </div>
    );
}

export default Column;