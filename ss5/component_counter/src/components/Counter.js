// cách 1
// import {useState} from "react";
//
// export function Counter() {
//
//     const [count,setCount] = useState(0)
//     const [count1,setCount1] = useState(0)
//
//
// return (
//     <>
//        <h1>Count 1: {count}</h1>
//         <button onClick={() => setCount(prevState => prevState+1)}>ADD1</button>
//
//         <h1>Count 2: {count1}</h1>
//         <button onClick={() => setCount1(prevState => prevState +2)}>ADD 2</button>
//     </>
// )
//
// }


 import {useIncrement} from "./UseIncrement";

export function Counter1() {
    const [count,setCount] = useIncrement(0);

    return(
        <>
        <h1>Count 1: {count}</h1>
            <button onClick={()=> setCount(count+1)}>ADD 1</button>
        </>
    )
}
