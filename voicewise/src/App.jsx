import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Nav from './components/Nav.jsx'
import Resources from './pages/Resources.jsx'
import About from './pages/About.jsx'
import Foot from './components/Foot.jsx';

function App() {
  console.log(window.location)
  // sets page according to selected navLink
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/resources":
      component = <Resources />
      break
    case "/about":
      component = <About />
      break
  }

  return (
    <>
      <Nav />
      {/* render associated component */}
      {component}
      <Foot />
    </>
  )
}

export default App
