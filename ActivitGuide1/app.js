//Components for Item number 1
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => {
    //populate variables
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let tel = document.getElementById("tel").value
    let major = document.getElementById("major").value
    let x = `Hello ${name}, I see that you are from ${address} and you are also pursuing your degree in ${major} and you can be contracted using ${tel}.`
    document.getElementById("output").innerHTML=x
})

//Components for Item number 2
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {
    //populate variables
    let sale = document.getElementById("sale").value
    sale = sale*0.23
    let y = `The projected profit is ${sale}`
    document.getElementById("output2").innerHTML=y
})

//Components for Item number 3
const btn3 = document.getElementById("btn3")
btn3.addEventListener("click", () => {
    //populate variables
    distance = 60*5
    let y = `The distance travelled in 5 hours is ${distance} miles`
    document.getElementById("output3").innerHTML=y
})
const btn4 = document.getElementById("btn4")
btn4.addEventListener("click", () => {
    //populate variables
    distance = 60*8
    let y = `The distance travelled in 8 hours is ${distance} miles`
    document.getElementById("output3").innerHTML=y
})
const btn5 = document.getElementById("btn5")
btn5.addEventListener("click", () => {
    //populate variables
    distance = 60*12
    let y = `The distance travelled in 12 hours is ${distance} miles`
    document.getElementById("output3").innerHTML=y
})


//Components for Item number 4
const btn6 = document.getElementById("btn6")
btn6.addEventListener("click", () => {
    //populate variables
    let miles = document.getElementById("miles").value
    let gas = document.getElementById("gas").value
    let mpg = miles/gas
    let y = `The calculated miles-per-gallon (MPG) is ${mpg}`
    document.getElementById("output4").innerHTML=y
})


//Components for Item number 5
const btn7 = document.getElementById("btn7")
btn7.addEventListener("click", () => {
    //populate variables
    let cel = document.getElementById("cel").value
    let far = (9/5)*cel+32
    let y = `${cel} degrees celsius converted to fahrenheit  is ${far} fahrenheit`
    document.getElementById("output5").innerHTML=y
})

//Components for Item number 6
const btn8 = document.getElementById("btn8")
btn8.addEventListener("click", () => {
    //populate variables
    let cookies = document.getElementById("cookies").value
    let cal = 300/(40/10)
    let totalCal = cookies*cal
    let y = `There are ${totalCal} calories in ${cookies} cookies`
    document.getElementById("output6").innerHTML=y
})

//Components for Item number 7
const btn9 = document.getElementById("btn9")
btn9.addEventListener("click", () => {
    //populate variables
    let males = document.getElementById("males").value
    let females = document.getElementById("females").value
    let total = parseInt (males)+ parseInt (females)
    let femper = females/total*100
    let malper = males/total*100
    let y = `With ${total} students ${malper}% of the population is male while ${femper}% of the population is female`
    document.getElementById("output7").innerHTML=y
})