import Footer from "./footer"
import Header from "./header"
import Body from "./body"
export default function App() {
  return(
    <>
    <Header />
    <Body image="/src/assets/tpen.jpg" name="Stephen" age={21} birthdate="2003/03/14" birthplace="Baguio City" isStudying={true} school="University of Baguio" course="Computer Science" likes="Genshin, LoL, and Valorant" dislikes="mpalaya and bad music"/>
    <Body />
    <Footer />
    </>
  )
}