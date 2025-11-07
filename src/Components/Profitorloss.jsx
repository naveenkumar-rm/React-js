import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Profitorloss = () => {
    const [a,seta] =useState('')
    const [b,setb] =useState('')
    const [c,setc] =useState('')
    const [d,setd] =useState('')
    function Calculate() {
        setc(parseInt(b)-parseInt(a))

        if(a>b){
            setd("Loss");
        }else{
            setd("Profit");  
        }
    }
  return (
    <div style={{ textAlign: 'center',margin: 50}}>
        <input placeholder='cost price'onChange={(e)=>seta(e.target.value)}/><br></br><br></br>
        <input placeholder='Selling price'onChange={(e)=>setb(e.target.value)}/><br></br><br></br>
        <Button onClick={Calculate}>Calculate</Button>

        <h3>{d}:{c}</h3>
    </div>
  )
}

export default Profitorloss
