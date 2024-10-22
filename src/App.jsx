import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navabar'
import Manager from './components/manager'
import Footer from './components/footer'
function App() {
 
  return (
    <>
      <Navbar />
      <Manager/>
      <Footer/>
    </>
  )
}

export default App
