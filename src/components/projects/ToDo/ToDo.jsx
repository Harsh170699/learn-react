import { useState } from 'react';
import './ToDo.css';
import { ToDoForm } from './ToDoForm';
import { ToDoList } from './ToDoList';
import { ToDoDate } from './ToDoDate';
import { getToDoLocalStorage, setToDoLocalStorage } from './ToDoLocalStorage';

export const ToDo = () => {

    const [task, setTask] = useState(() => getToDoLocalStorage());

    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;
        // To check if input field is empty or not
        if (!content) return;
        // to check if data already exists or not
        const ifTodoContentMatched = task.find((currTask) => currTask.content === content);
        if (ifTodoContentMatched) return;
        // Using spreadoperator: keep the previous values as is, just add the 'inputValue' at the end
        setTask((prevTask) => [...prevTask, { id, content, checked }]);
    };

    // ToDo add data to localstorage
    setToDoLocalStorage(task);

    // ToDO handleDeleteToDo function
    const handleDeleteToDo = (value) => {
        // return those elements which are not matching with my 'value'
        const updatedTask = task.filter((currTask) => currTask.content !== value);
        setTask(updatedTask);
    }

    // TODo handleClearToDoData function
    const handleClearToDoData = () => {
        setTask([]);
    }

    // todo handleCheckedToDo functionality
    const handleCheckedToDo = (content) => {
        const updatedTask = task.map((currTask) => {
            if (currTask.content === content) {
                return { ...currTask, checked: !currTask.checked };
            } else {
                return currTask;
            }
        })
        setTask(updatedTask);
    }

    return (
        <section className='todo-container'>
            <header>
                <h1>ToDo List</h1>
                <ToDoDate />
            </header>
            {/* Pass data from Parent to Child */}
            <ToDoForm onAddTodo={handleFormSubmit} />
            <section className='myUnOrdList'>
                <ul>
                    {
                        task.map((currTask) => {
                            return <ToDoList
                                key={currTask.id} data={currTask.content} checked={currTask.checked}
                                onHandleDeleteToDo={handleDeleteToDo} onHandleCheckedToDo={handleCheckedToDo} />
                        })
                    }
                </ul>
            </section>
            <section className='clear-btn' onClick={handleClearToDoData}>Clear All</section>
        </section>
    );
}