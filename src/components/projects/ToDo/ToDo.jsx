import { useEffect, useState } from 'react';
import './ToDo.css';
import { ToDoForm } from './ToDoForm';
import { ToDoList } from './ToDoList';
import { ToDoDate } from './ToDoDate';

export const ToDo = () => {
    
    const [task, setTask] = useState([]);

    const handleFormSubmit = (inputValue) => {
        
        if (!inputValue) return;
        if (task.includes(inputValue)) return;
        // Using spreadoperator: keep the previous values as is, just add the 'inputValue' at the end
        setTask((prevTask) => [...prevTask, inputValue]);
    };

    // ToDO handleDeleteToDo function
    const handleDeleteToDo = (value) => {
        // return those elements which are not matching with my 'value'
        const updatedTask = task.filter((currTask) => currTask !== value);
        setTask(updatedTask);
    }

    // TODo handleClearToDoData function
    const handleClearToDoData = () => {
        setTask([]);
    }

    return (
        <section className='todo-container'>
            <header>
                <h1>ToDo List</h1>
                <ToDoDate />
            </header>
            {/* Pass data from Parent to Child */}
            <ToDoForm onAddTodo={handleFormSubmit}/>
            <section className='myUnOrdList'>
                <ul>
                    {
                        task.map((currTask, index) => {
                            return <ToDoList key={index} index={index} data={currTask} onHandleDeleteToDo={handleDeleteToDo}/>
                        })
                    }
                </ul>
            </section>
            <section className='clear-btn' onClick={handleClearToDoData}>Clear All</section>
        </section>
    );
}