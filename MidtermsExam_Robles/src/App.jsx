import './App.css'
import  Header  from './Header'
import  Footer  from './Footer'
import Paragraph from './Paragraph'
import FavoriteFood from './FavoriteFoods'
import Counter from './Counter'
import Function from './Function'
import  Identification  from './Identification'
function App() {
  const fruits = [
    {id: 1 , name: "Kiwi", Color: "Green", rating: 8},
    {id: 2 , name: "Mango", Color: "Yellow", rating: 10},
    {id: 3 , name: "Apple", Color: "Red", rating: 7},
    {id: 4 , name: "Strawberry", Color: "Red", rating:7},
    {id: 5 , name: "Banana", Color: "Yellow", rating: 8},
]
  return (
    <>
      <Header/>
      <Identification></Identification>
      
      <Paragraph></Paragraph>
      <Footer/>
    </>
  )
}

export default App
