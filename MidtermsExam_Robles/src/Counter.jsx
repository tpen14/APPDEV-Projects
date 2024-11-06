import { useState } from 'react'

export default function Counter(){
    useState[count, setCount] = useState(0)
    const increment = () => {
        setCount(c=>c+2);
    }
    const decrement = () => {
        setCount(c=>c-2);
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}