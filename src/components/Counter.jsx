import {useState} from "react";
export const Counter=()=>{
    //let count  =0;
const [count,setCount]=useState(0); 
    function handleClick(){
        setCount(count+1);
        console.log(count);
    }
    return (
        <>
            
            <h1>counter:{count}</h1>
            <button onClick={handleClick}>INCREMENT</button>
            
        </>
    );


    }
    export default Counter