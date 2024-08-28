const colors = ["green" , "red", "rgba(133, 122, 200)", "f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

//function to chancge the color of the file

btn.addEventListener("click", ()=> {
    //Toggle body from HTML
    console.log(document.body)
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}