import { useState } from "react";

// Master useState with Objects
// const users

export const DerivedState = () => {
    const [users, setUsers] = useState([
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 },
        { name: 'Angles', age: 45 },
    ]);
    console.log(users)
    // Derived State: count of users
    const userCount = users.length;
    // Derived State: average age of users
    const averageAge = users.reduce((accum, curEle) => accum + curEle.age, 0) / userCount;
    return (
        <div className="main-div">
            <h1>Users LIst</h1>
            <ul>
                {
                    users.map((curEle, index) => {
                        return (
                            <li key={index}>{curEle.name} - {curEle.age} year old</li>
                        );
                    })
                }
            </ul>
            <p>Total users: {userCount}</p>
            <p>Average age: {averageAge}</p>
        </div>
    )
}