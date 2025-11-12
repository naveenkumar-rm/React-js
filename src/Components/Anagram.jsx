import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Anagram = () => {
    const[str1, setStr1] = useState(' ');
    const[str2, setStr2] = useState(' ');
    const[str3, setStr3] = useState(' ');
 
    function Anagramfuntion() {
        let a=[];
        let b=[];
        for (let i = 0; i < str1.length; i++) {
            a.push( str1.toLowerCase[i]);
            }
        for (let j = 0; j < str2.length; j++) {
            b.push(str2.toLowerCase[j]);
            }
        a.sort();
        b.sort();
        if(a.toString()===b.toString()){
            setStr3('The strings are anagram');
        }else{
            setStr3('The strings are not anagram');
        }
    }
  return (
    <div>
      <input type="text" placeholder='Enter first string' onChange={(e)=>setStr1(e.target.value)} /><br/><br/>
      <input type="text" placeholder='Enter second string'onChange={(e)=>setStr2(e.target.value)} /><br/><br/>
      <Button className='m-3' onClick={Anagramfuntion}>Check Anagram</Button>
      <p>Result: {str3} </p>
    </div>
  )
}

export default Anagram
