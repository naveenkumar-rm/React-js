import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Electricitybillcalculator = () => {
    const[a,seta]=useState('')
    const[b,setb]=useState('')

    function Calculate() {
        if(a>=0 && a<=100){
            setb(a*5)
        }else if (a>=101 && a<=200) {
             setb(a*7)
        } else {
             setb(a*10)
        }
    }

  return (
    <div style={{ textAlign: 'center',margin: 50}}>
      <input placeholder='Enter your total units'onChange={(e)=>seta(e.target.value)} /><br></br><br></br>
      <Button onClick={Calculate}>Calculate</Button>
      <h3>Electricity Bill:{b}</h3>
    </div>
  )
}

export default Electricitybillcalculator
