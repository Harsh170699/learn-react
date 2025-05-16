import React, { useState, Fragment } from 'react'
import './App.css'
import NetflixSeries, {Footer, Header} from './components/NetflixSeries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <Footer />
    </>
  )
};
export default App
