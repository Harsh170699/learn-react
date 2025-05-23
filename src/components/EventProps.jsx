import './EV.css';
// Parent Component: EventProps
export const EventProps = () => {
    const HandleWelcomeUser = (user) => {
        alert(`Hey, ${user}`);
    }

    const handleOver = () => {
        alert(`Hey, thankyou for hovering me`);
    }
    return (
        <>
            {/* Child Component: WelcomeUser */}
            <WelcomeUser onClick={() => {HandleWelcomeUser('harsh shah')}} onMouseEnter={handleOver}/>
        </>
    )
}

// Passed above onClick and onMouseEnter events as props in Child Component
const WelcomeUser = ({onClick, onMouseEnter}) => {
    const handleGreeting = () => {
        console.log('Hey user welcome');
        onClick();
    }
    return (
        <>
            <button onClick={onClick}>Click</button>
            <button onMouseEnter={onMouseEnter}>Hover</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}