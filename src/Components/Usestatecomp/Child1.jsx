import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap'
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";

const Child1 = (props) => {
    const[count,setCount]=useState(0);
    const[data,setData]=useState(true);
    const[sentance,setsentence]=useState("");
    const[charcount,setcharcount]=useState(0);
    const[like,setlike]=useState(0);
    const[dislike,setdislike]=useState(0);
    const[color,setColor]=useState("");
    function toggleData() {
        setData(!data)
    }
    function countCharacters() {
        setcharcount(sentance.length)
    }
  return (
    <div style={{backgroundColor:props.bg? "black" : "white",color:props.bg?"white":"black",textAlign:'center',height:'100vh'}}>
    <Button onClick={props.changetheme}>{props.bg ? "Light" : "Dark" }</Button><br />
    <div style={{backgroundColor:color}}>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'40px'}}>
    <Button onClick={()=>setCount(count+1)}>+</Button>
    <h1>{count}</h1>
    <Button onClick={()=>setCount(count-1)}>-</Button>
    </div>
    
    {
    data? <h4>Avul Pakir Jainulabdeen Abdul Kalam was born on 15 October 1931 in Rameswaram, Tamil Nadu, India.</h4> : null
    }
    <Button onClick={toggleData}>Hide</Button><br /><br />
    </div>
    <input type='text' placeholder='Enter text' onChange={(e)=>setsentence(e.target.value)}/><br /><br />
    <Button onClick={countCharacters}>Character Count</Button>
    <h3>{charcount}</h3>
    <Button className='m-3' onClick={()=>setColor("red")}>Red</Button>
    <Button className='m-3' onClick={()=>setColor("blue")}>Blue</Button>
    <Button className='m-3' onClick={()=>setColor("green")}>Green</Button>


    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'40px'}}>
    <button onClick={()=>setlike(like+1)}><AiOutlineLike /></button>
    <h1>{like}</h1>
    <button onClick={()=>setdislike(dislike+1)}><BiDislike /></button>
    <h1>{dislike}</h1>
    </div>
    </div>
  )
}

export default Child1
