import React, {useState} from "react"
export function useIncrement(addAmount) {
    const[count,setCount] = useState(0);
    function increase(addAmount) {
        setCount( addAmount)
    }

   return [count,increase]

}