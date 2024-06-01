
import './App.css'
import NavBar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {

  
  return (
    <>
      <NavBar/>
       <Outlet/>
       <Footer/>
    </>
  )
}

export default App
