import { useState } from "react";

export default function Function(){
    useState[count , setCount] = useState(0)
    const condi = () => {
        if (count % 2 == 0 || count == 0){
            setCount(c => c+1);
        }
        else if (count %2 == 1) {
            setCount(c => (c+1)+1)
        }
    }

    return(
        <div>
        <p>{count}</p>
        <button onClick={condi}>Press me!</button>
        </div>
    )
}