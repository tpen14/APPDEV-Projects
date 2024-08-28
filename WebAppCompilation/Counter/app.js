// set initial value for our count variable
let count = 0;
//select value buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
//console.log(btns)
btns.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        //console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--
        }
        else if (styles.contains('increase')){
            count++
        }
        else if (styles.contains('incFive')){
            count+=5
        }
        else if (styles.contains('decFive')){
            count-=5
        }
        else if (styles.contains('RandNum')){
            count = Math.floor(Math.random()*(100-(-100+1))) +(-100)
        }
        else {
            count = 0
        }
        if(count>0) {
            value.style.color = "green"
        }
        else if(count<0){
            value.style.color = "red"
        }
        else {
            value.style.color = "black"
        }
        value.textContent=count
    })
})
