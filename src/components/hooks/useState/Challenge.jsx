// * useState Challenge Descrition
// Create a simple react component that allows users to increment and decrement a counter using two buttons.

// Reset Button: Add a button to reset the count to zero.

// Limitations: Set a maximum and minimum limit for the counter and disable the buttons when both limits are reached.

// Step increment: Add an input field that allow users to set the step value by which the counter should increment or decrement
import { useState } from 'react';
import '../Hooks.css';
export const Challenge = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const handleIncrement = () => {
        setCount(count + step);
    }

    const handleDecrement = () => {
        setCount(count - step);
    }

    const handleReset = () => {
        setCount(0);
    }
    return (
        <div className='container state-container'>
            <h1>useState challenge</h1>
            <p>Count: <span>{count}</span></p>
            <div>
                <label>
                    Step:
                    {/* whenever we use onChange event we get by default Event object */}
                    <input type='number' value={step} onChange={(e) => setStep(Number(e.target.value))}/>
                </label>
            </div>

            <div className='grid-three-cols'>
                <button onClick={handleIncrement} disabled={count >= 100}>Increment</button>
                <button onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>

    );
}