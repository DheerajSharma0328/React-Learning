import { useState } from "react"


export default function Counter() {
    let [count, setCount] = useState(0);
    
    function IncCiunt(){
        setCount(count + 1)
    }



    return (
        <>
            <button onClick={IncCiunt}> Increase</button>
            <h3>Count is {count} </h3>
        </>
    )
}
