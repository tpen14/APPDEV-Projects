import './App.css'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import NotFound from './Components/NotFound'
import Games from './Components/Games'
import Game from './Components/Game'
import Header from './Components/Header'
// When importing components from file
function App() {

  return (
    <>
    <Header></Header>
      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
        <Route path='/games'>
          <Route index element = {<Games/>}/>
          <Route path = ":gameId" element={<Game/>}/>
        </Route>
        
        

        
      </Routes>
    </>
  )
}

export default App
