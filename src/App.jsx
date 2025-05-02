import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // you can only return one element, so you can use a fragment or a div
    <div>
      <div>
        <img src="ageOfUltron.jpg" alt='ageOfUltron.jpg' width="20%" height="20%"/>
      </div>
      <h2>Name: Marvel: Age of Ultron</h2>
      <h3>Rating: 5.8</h3>
      <p>Summary: Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe out the human race, the Avengers set out to stop him.</p>
    </div>
  )
}

export default App
