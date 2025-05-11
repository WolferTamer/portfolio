import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Router from './Router.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Router/>
    </>
  )
}

export default App
