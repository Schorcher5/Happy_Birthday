import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import  Cake  from './cake';

function App() {
  const [age, setCount] = useState(50)

  return (
    <div className="App">

      <Cake name="Jorge" cake="/public/birthday.png" />
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
