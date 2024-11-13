import { useState } from 'react'
import './App.css'
import Grocery from './Grocery'

let items = [
  {id:1, name: 'Grapes', price:250},
  {id:2, name: 'Orange', price:100},
  {id:3, name: 'Kiwi', price:280},
  {id:4, name: 'Banana', price:120},
  {id:5, name: 'Cucumber', price:100}
  ]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Grocery items = {items}></Grocery>
    </>
  )
}

export default App
