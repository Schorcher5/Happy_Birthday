import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [age, setCount] = useState(50)

  return (
    <div className="App">

      <h1>!Feliz Cumpleanos Jorge!</h1>
      <div className="card">
        <button onClick={() => setCount((age) => age + 1)}>
          Your now  {age}
        </button>
        <p>
          Thank you for everything you have done for us.
        </p>
      </div>
      
    </div>
  )
}

export default App
