import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Task = () => {
    const[num,setnum]=useState(0);
    const[num2,setnum2]=useState(0);
    
    function Armstrong() {
        let sum=0;
       let num1 = num.toString();
       let num3=num1.length;
       for(let i = 0;i<num1.length;i++){
        let digit = parseInt(num1[i]);
        sum += Math.pow(digit,num3)
        }
        if (sum === parseInt(num)) {
        setnum2(`${num} is an Armstrong number`);
        } else {
        setnum2(`${num} is not an Armstrong number`);
        }

    }
   
  return (
    <div>
      <input placeholder='Enter your name' onChange={(e)=>setnum(e.target.value)} />
      <Button onClick={Armstrong}>Find</Button>
      <h3>{num2}</h3>
    </div>
  )
}

export default Task
