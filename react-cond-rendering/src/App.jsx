import Header from './header'
import Footer from './Footer'
import ListOfFruits from './ListOfFruits'
function App() {
  const fruits  = [
    {id: 1, name: "apple", color: "red"},
    {id: 2, name: "banana", color: "yellow"},
    {id: 3, name: "orange", color: "orance"},
    {id: 4, name: "grape", color: "purple"},
    {id: 5, name: "kiwi", color: "green"}
  ]
  const desserts = [
    {id: 1, name: "cake", color: "red"},
    {id: 2, name: "ice creat", color: "green"},
    {id: 3, name: "pie", color: "blue"}
  ]
  fruits.sort((a , b) => b.name.localeCompare(a.name))
  const redfruit = fruits.filter (fruit => fruit.color === "red")

  return (
    
    <>
    <Header/>
    {fruits.length > 0 ? <ListOfFruits items = {fruits} category = "My Favorite Fruits"/>:(<p>I do not like fruits!</p>)}  
    {redfruit.length > 0 && <ListOfFruits items = {redfruit} category = "My Favorite Fruits"/>}
    {desserts.length > 0 && <ListOfFruits items={desserts} category ="My Favorite Desserts"/>}
    <Footer/>    
    </>
  )
}



export default App
