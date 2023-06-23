import {useIncrement} from "./UseIncrement";

export function Counter2() {
    const [count,setCount] = useIncrement(0);

    return(
        <>
            <h1>Count 2: {count}</h1>
            <button onClick={()=> setCount(count +2)}>ADD 1</button>
        </>
    )
}