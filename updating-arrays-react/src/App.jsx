import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './Footer'
import Header from './Header'
import FavoriteGames from './FavoriteGames'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <FavoriteGames/>
      <Footer/>
    </>
  )
}

export default App
