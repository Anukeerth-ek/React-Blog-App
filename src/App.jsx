import { useState } from 'react'
import './App.css'
import NavBar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
       <Outlet/>
       <Footer/>
    </>
  )
}

export default App
