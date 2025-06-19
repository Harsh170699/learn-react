import { useState } from 'react';
export const ToDoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (value) => {
        setInputValue(value);
    };
    const handleFormSubmit = (event) => {
        // this will prevent default behaviour of form, this will avoid refreshing the page
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue('');
    }
    return (
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type='text' className='todo-input' autoComplete='off' value={inputValue} onChange={(event) => handleInputChange(event.target.value)} />
                </div>
                <div>
                    <button type='submit' className='todo-btn'>Add Task</button>
                </div>
            </form>
        </section>
    );
}