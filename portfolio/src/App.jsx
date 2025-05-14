import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Router from './Router.jsx'

function App() {

  document.title="Caleb - Home"

  return (
    <>
      <NavBar/>
      <Router/>
    </>
  )
}

export default App
