import Footer from "./footer"
import Header from "./header"
import Body from "./body"
export default function App() {
  return(
    <>
    <Header />
    <Body name="Stephen" food="Pizza" isHealthy={false} age={21}/>
    <Body name="Erin" food="Siomai Rice" isHealthy={false} age={21}/>
    <Body name="Gerald" food="Torta" isHealthy={false} age={22}/>
    <Body name="Frenne" food="Mango" isHealthy={true} age={19}/>
    <Body />
    <Footer />
    </>
  )
}