import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './routes/home/home'
import Login from './routes/authLogin/login'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-100'>
      <Login />
      
    </div>
  )
}

export default App
