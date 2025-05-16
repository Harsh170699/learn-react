import React, { useState, Fragment } from 'react'
import './App.css'
import NetflixSeries from './components/NetflixSeries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NetflixSeries />
    </>
  )
};
export default App
