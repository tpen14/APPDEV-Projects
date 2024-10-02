import React,{useState} from "react";

export default function Quote(){
    const [count, setCount] = useState(0)
    const quotes = [
        "You have power over your mind, not outside events, realize this and you will find strength" , 
        "We suffer more often in imagination then in reality", 
        "Make the mind tougher by exposing it to adversity", 
        "Let your desires be ruled by reason", 
        "Difficulties strengthen the mind, as labor does the body", 
        "Sometimes even to live is an act of courage"]
    const randomNumber = () => {
            let temp;
            do {
                temp = Math.floor(Math.random() * quotes.length);
            } while (temp === count); 
            setCount(temp); 
    }
    const incrementCount = () => {
        setCount(c => c+1);
    }
    const resetCount = () => {
        setCount(c => 0)
    }
    const ranCheck = () => {
        
    }
    if (count >5){
        resetCount();
    }
    
    const ranQuote = quotes[count]


    return(
        <>
        <div className="container">
            <p className="counter-container">
                Quote: <br />
                {ranQuote}
            </p>
            &nbsp;
            <button className="button-container-reset" onClick={incrementCount}>Increment</button>
            <button className="button-container-reset" onClick={randomNumber}>Random</button>
        </div>
        </>
    )
}