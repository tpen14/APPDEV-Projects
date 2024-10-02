import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Quote from './Quote'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Quote/>
    <Footer/>
    </>
  )
}

export default App
