import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Salarytaxcalculator = () => {
    const [a,seta]=useState('')
    const [b,setb]=useState('')
    function Tax() {
        if(a>=0 && a<=5000){
            setb("No Tax Under ₹5000")
        }else if (a>=5001 && a<=10000) {
             setb((a/100)*10)
        }else if (a>=10001 && a<=20000) {
            setb((a/100)*20)
        }else if (a>=20001){
             setb((a/100)*30)
        }
    }
  return (
    <div style={{ textAlign: 'center',margin: 50}}>
      <input placeholder='Enter your salary' onChange={(e)=>seta(e.target.value)}/><br></br><br></br>
      <Button onClick={Tax}>Calculate your tax</Button>
      <h3>Your Tax amount :{b}</h3>
    </div>
  )
}

export default Salarytaxcalculator
