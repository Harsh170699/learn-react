import React, { useState, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </>
  )

  // return (
  // *  Array with Keys: 
  //   [<NetflixSeries key="1"/>,
  //   <NetflixSeries key="2"/>,
  //   ]
    // you can only return one element, so you can use a fragment or a div
    // <div>
    //   <NetflixSeries />
    //   <NetflixSeries />
    // </div>
  // )
};

//* 1. Variables
//? you can embed any JS variable in JSX by enclosing it in {} braces. 
//? The value of the variable will be inserted into the DOM at the respective location.

// * 2. Expressions
// ? JSX allows you to write any JS expression inside {} braces. This includes operations, function calls, and even ternary operators and
//? other JS expressions that produce a value.

// * 3. Functions
// ? Functions, especially those  that return JSX, can be invoked directly within your JSX.

// React component
const NetflixSeries = () => {
  const name = "Avengers: Age of Ultron";
  const rating = "5.8";
  const summary = "Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe";
  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  };
  return (
  <div>
    <div>
      <img src="ageOfUltron.jpg" alt='ageOfUltron.jpg' width="20%" height="20%" />
    </div>
    <h2>Name: {name}</h2>
    <h3>Rating: {10 + 3.2}</h3>
    <p>Summary: {summary}</p>
    <p>Genre: {returnGenre()}</p>
  </div>
  );
}
export default App
