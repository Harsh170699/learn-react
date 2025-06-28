import { useState } from 'react';
import './Hooks.css';
export const ShortCircuit = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState();

    return (
        <section className="container short-container">
            <h1>Welcome to the shortcircuit evaluation</h1>
            {/* Conditional rendering using short circuit evaluation */}
            { isLoggedIn && <p>You are logged in!</p>}
            {/* Another example of short circuit evaluation */}
            {user ? `Hello ${user}` : "Please Login!"}
            <div className="grid-three-cols">
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
                <button onClick={() => setUser('Harsh shah')}>Set User</button>
                <button onClick={() => setUser('')}>Clear User</button>
            </div>
        </section>
    );
}