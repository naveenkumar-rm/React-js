import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap'

const System = () => {
    const [books, setBooks] =useState([]);
    const [bookName, setBookName]=useState("");
    const [removeBookName, setRemoveBookName]=useState("");
    const [showBooks, setShowBooks]=useState(false);
    function addbooks() {
        setBooks([...books, bookName]);
    }
    function removebooks() {
        setBooks(books.filter((b) => b !== removeBookName)); 
    }
    function showbooks() {
        setShowBooks(!showBooks);
    }
  return (
    <div style={{textAlign:'center'}}>
      <h1>Library Management System</h1>

      <input type='text' placeholder='Add book' onChange={(e)=>setBookName(e.target.value)} />
      <Button className='m-3'onClick={addbooks}>Add</Button><br /><br />

        {!showBooks ? <h3>Available Books</h3> : <ul style={{listStyleType:'none'}}>
          {books.map((book, index) => (
            <li key={index}>{book}{' '}
              <Button onClick={() => { setRemoveBookName(book); removebooks();}}>Remove</Button>
            </li>
          ))}
        </ul>
      }
      
      
        <Button className='m-3' onClick={showbooks}>{showBooks ? 'Hide' : 'Show'}</Button>
    </div>
  )
}

export default System
