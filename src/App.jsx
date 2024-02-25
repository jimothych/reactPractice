import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import Footer from './Footer'
import HomeScreen from './HomeScreen.jsx'
//import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <HomeScreen></HomeScreen>
      <Footer></Footer>
    </>
  )
}

export default App
