const quotes = [
    "You have poert over your mind, not outside events, realize this and you will find strength" , 
    "We suffer more often in imagination then in reality", 
    "Make the mind tougher by exposing it to adversity", 
    "let your desires be ruled by reason", 
    "Difficulties strengthen the mind, as labor does the body", 
    "Sometimes even to live is an act of courage"]
const btn = document.getElementById("btn")
const quote = document.querySelector(".quote")

//function to chancge the color of the file

btn.addEventListener("click", ()=> {
    //Toggle body from HTML
    console.log(document.body)
    const randomNumber = getRandomNumber()
    quote.textContent = quotes[randomNumber]
})

getRandomNumber = () => {
    return Math.floor(Math.random() * quotes.length)
}