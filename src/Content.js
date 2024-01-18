import React from "react";
import { useState } from "react";

const Content = () => {
    const [count, setCount] = useState(0); 
    function incrementFunc() {
        setCount((count) => {return count + 1})
    }
    function decrementFunc() {
        setCount((count) => {return count - 1})
    }
    return (
        <div>
            <button onClick={decrementFunc}>-</button>
            <div>{count}</div>
            <button onClick={incrementFunc}>+</button>
        </div>
    )
}

export default Content;