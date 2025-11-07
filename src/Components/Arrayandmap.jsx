import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Arrayandmap = () =>    {
    const[fruit,setfruit]= useState('');
    const[fruit1,setfruit1]= useState('');
    const[fruits,setfruits]= useState(['apple','banana','orange','blueberry']);
    function Addfruit() {
        setfruits([...fruits,fruit]);
        setfruit('')
    }
    function deletefruit() {
     let nk=fruits.filter(em=>em!=fruit1)
     setfruits(nk)
    }
 
  return (
    <div style={{ textAlign: 'center',margin: 50}}>
      <input placeholder='Enter Your Fruit' onChange={(e)=>setfruit(e.target.value)} /><br></br><br></br>
      <Button onClick={Addfruit}>Add</Button><br></br><br></br><br></br>
       <input placeholder='delete fruit' onChange={(e)=>setfruit1(e.target.value) } /><br></br><br></br>
      <Button onClick={deletefruit}>Delete</Button><br></br><br></br>
      {
        fruits.map(nam=>
        <p>{nam}</p>)
      }
    </div>
  )
}

export default Arrayandmap
