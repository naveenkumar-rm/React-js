import React from 'react'
import { useState } from 'react'

const String = () =>  {
    const[Word,setword]=useState('');
    const[color,setcolor]=useState('');
    const[outWord,setoutword]=useState('');
    const[wordlength,setwordlength]=useState(0);
    const[vowelcounts,setvowelcounts]=useState(0);
    const[bigletter,setbigletter]=useState('');
    const[smallletter,setsmallletter]=useState('');
    const[palindrome,setpalindrome]=useState('');
    const[Largeword,setLargeword]=useState('');
    const[Largeword1,setLargeword1]=useState('');
function Output() {
  let reversed='';
  let vowels =['a','e','i','o','u'];
  let count = 0;
  for (let i = Word.length-1; i >= 0; i--) {
    reversed += Word[i];
    if(vowels.includes(Word[i].toLowerCase())){
      count++
    }
  }

  
  setoutword(reversed)
  setwordlength(Word.length)
  setvowelcounts(count)
  setbigletter(Word.toUpperCase())
  setsmallletter(Word.toLowerCase())
  setpalindrome(Word === reversed ? 'Palindrome' : 'notPalindrome');

}
function largestword() {
    let longword=Largeword.split(" ");

    setLargeword1(longword)
  }


  return (
    <div style={{backgroundColor:color, height:730 ,textAlign:'center'}}>
    <input placeholder='Enter your string' onChange={(e)=>setword(e.target.value)}/>
    <button onClick={Output}>string functions</button><br></br>
    <button onClick={() => setcolor('red')}>red</button>
    <button onClick={() => setcolor('Blue')}>Blue</button>
    <button onClick={() => setcolor('Green')}>Green</button>
    <button onClick={() => setcolor('Purple')}>Purple</button>

      
      <h3>reverse string : {outWord}</h3>
      <h3>wordlength : {wordlength}</h3>
      <h3>vowelcounts : {vowelcounts}</h3>
      <h3>UPPERCASE : {bigletter}</h3>
      <h3>lowercase : {smallletter }</h3>
      <h3>Palindrome or not: {palindrome}</h3>

    <input placeholder='Enter your Sentance' onChange={(e)=>setLargeword(e.target.value)}/>
     <button onClick={largestword}>largestword</button>
     <h3>{Largeword}</h3>

    </div>
  )
}

export default String
