import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Mathoperators = () => {
  const [a, seta] = useState('');
  const [b, setb] = useState('');
  const [d, setd] = useState('');
  const [e, sete] = useState('');

  const calculators = () => {
    let c;
    switch (d) {
      case '+':
        c = parseInt(a) + parseInt(b);
        break;
      case '-':
        c = parseInt(a) - parseInt(b);
        break;
      case '*':
        c = parseInt(a) * parseInt(b);
        break;
      case '/':
        c = parseInt(a) / parseInt(b);
        break;
      default:
        c = 'Invalid operation';
        break;
    }
    sete(c);  
  };

  return (
    <div style={{ textAlign: 'center'}}>
      <input
        placeholder="Number 1"
        onChange={(e) => seta(e.target.value)}
      />
      <br /><br />
      <input
        placeholder="Number 2"
        onChange={(e) => setb(e.target.value)}
      />
      <br /><br />
      <input type="text" placeholder="Operator (+, -, *, /)" onChange={(e) => setd(e.target.value)}
      />
      <br /><br />
      <Button onClick={calculators}>Calculate</Button>
      <h3>Result: {e}</h3>
    </div>
  );
};

export default Mathoperators;
