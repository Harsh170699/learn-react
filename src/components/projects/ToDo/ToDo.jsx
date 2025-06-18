import { useState } from 'react';
import './ToDo.css';
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const ToDo = () => {
    const [inputValue, setInputValue] = useState('');
    const [task, setTask] = useState([]);
    const handleInputChange = (value) => {
        setInputValue(value);
    };
    const handleFormSubmit = (event) => {
        // this will prevent default behaviour of form
        event.preventDefault();
        if (!inputValue) return;

        if (task.includes(inputValue)) {
            setInputValue('');
            return;
        }

        // Using spreadoperator: keep the previous values as is, just add the 'inputValue' at the end
        setTask((prevTask) => [...prevTask, inputValue]);

        setInputValue('');
    };
    return (
        <section className='todo-container'>
            <header>
                <h1>ToDo List</h1>
            </header>
            <section className='form'>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type='text' className='todo-input' autoComplete='off' value={inputValue} onChange={(event) => handleInputChange(event.target.value)}/>
                    </div>
                    <div>
                        <button type='submit' className='todo-btn'>Add Task</button>
                    </div>
                </form>
                <section className='myUnOrdList'>
                    <ul>
                        {
                            task.map((currTask, index) => {
                                return <li key={index} className='todo-item'>
                                    <span>{currTask}</span>
                                    <button className='check-btn'><MdCheck /></button>
                                    <button className='delete-btn'><MdDeleteForever /></button>
                                </li>
                            })
                        }
                    </ul>
                </section>
            </section>
        </section>
    );
}