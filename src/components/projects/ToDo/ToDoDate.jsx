import { useEffect, useState } from 'react';
export const ToDoDate = () => {
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        // Todo date and time
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            // as data will change constantly, hence, will use state
            setDateTime(`${formattedDate} - ${formattedTime}`);
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (
        <h2 className='date-time'>{dateTime}</h2>
    )
}