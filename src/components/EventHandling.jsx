import './EV.css';
export const EventHandling = () => {
    // function handleButtonClick() {
    //     alert('Hi, I am on click event')
    // }

    // Using Fat arrow function
    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert('Hi, I am on click event')
    }

    const handleWelcomeUser = (user) => {
        console.log(`Hey ${user}, Welcome`);
    }
    return (
        <>
            {/* Function components with named function 
            Remember how we havent called this function '{handleButtonClick()}', if we call this function here then it will run without even clicking. 
            You just need to pass reference '{handleButtonClick}' and not call here.
            */}
            <button onClick={handleButtonClick}>Click Me</button>
            <br />
            {/* Fat arrow function
            In react, event handlers receive the event object as an argument by default. However, when you use an arrow function directly
            in the onClick attribute without passing the event explicitly. React doesnt pass the event object to your handler function.
            This is because the arrow function creates a new function and calls your handler without passing any arguments
            */}
            <br />
            <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
            <br />
            {/* Inline Event Handler
            */}
            <button onClick={(event) => console.log(event)}>Click Me 3</button>
            <br />
            {/* Function components with Inline Arrow Functions */}
            <button onClick={() => alert("Hi, I am inline arrow function")}>Click Me 4</button>
            <br />
            {/* Passing Arguments to Event Handlers */}
            <button onClick={() => handleWelcomeUser("harsh")}>Click Me 5</button>
        </>
    )
}