const value = document.querySelector('#value')
const btns = document.querySelectorAll(".btn")
let count = 30;

btns.forEach((btn) => {  
btn.addEventListener('click', (e) =>{
    const styles = e.currentTarget.classList
    const timer = setInterval(function() {
       if(styles.contains('start')){
        count--;
        value.textContent=(count);
        if (count === 0) {
          clearInterval(timer)
          value.textContent=("Time's up!");
        }}
      }, 1000)
      if(styles.contains('reset')){
        count = 30
        value.textContent=(count);
        }
      })
})