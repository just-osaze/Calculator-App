import React from 'react';
import { useState } from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  // const [result, setResult] = useState<number | null>(null);

  //Event Handler for number buttons
  const handleNumberClick = (number: string) => {
    //update the input to append the clicked number
    setInput((prevInput) => prevInput + number)
  }



  return (
    <div className=''>
      <input type='text' value={input} />
      <br />
      <button onClick={() => handleNumberClick('C')}>C</button>
      <button onClick={() => handleNumberClick('+/-')}>+/-</button>
      <button onClick={() => handleNumberClick('%')}>%</button>
      <button onClick={() => handleNumberClick('÷')}>÷</button>
      <br />
      <button onClick={() => handleNumberClick('7')}>7</button>
      <button onClick={() => handleNumberClick('8')}>8</button>
      <button onClick={() => handleNumberClick('9')}>9</button>
      <button onClick={() => handleNumberClick('x')}>x</button>
      <br />
      <button onClick={() => handleNumberClick('4')}>4</button>
      <button onClick={() => handleNumberClick('5')}>5</button>
      <button onClick={() => handleNumberClick('6')}>6</button>
      <button onClick={() => handleNumberClick('+')}>+</button>
      <br />
      <button onClick={() => handleNumberClick('1')}>1</button>
      <button onClick={() => handleNumberClick('2')}>2</button>
      <button onClick={() => handleNumberClick('3')}>3</button>
      <button onClick={() => handleNumberClick('=')}>=</button>
    </div>
  )
}

export default Calculator;