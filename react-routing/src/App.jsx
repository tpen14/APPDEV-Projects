import './App.css'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import NotFound from './Components/NotFound'
import Games from './Components/Games'
import Game from './Components/Game'
// When importing components from file
function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>                                                  
        </ul>
      </nav>
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
