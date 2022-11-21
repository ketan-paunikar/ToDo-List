
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import './AddTaskForm.css'


const AddTaskForm = ({ addTask }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        value && addTask(value)
        setValue("");
    };

    return (
        <div className='form'>
            <h1>To-Do List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className='input'
                    type="text"
                    value={value}
                    placeholder="Enter Task..."
                    onChange={e => setValue(e.target.value)}
                />
                <button className='add-button' type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddTaskForm