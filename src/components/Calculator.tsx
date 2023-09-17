import React from 'react';
import { useState } from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('2');
  const [result, setResult] = useState<number | null>(null);

  //Event Handler for number buttons
  const handleNumberButton = (number: string) => {
    //update the input to append the clicked number
    setInput((prevInput) => prevInput + number)
  }
  //Event Handler for clear Button (C)
  const handleClearButton = () => {
    //clear the input screen and set result screen to 0
    setInput('');
    setResult(null);
  }
  const handleOperatorButton = (operator: string) => {
    //check if an operator exist
    const lastChar = input.charAt(input.length - 1);
    if (lastChar === '+' || lastChar === '-' || lastChar === '÷' || lastChar === 'x') {
      //if an operator exist, delete it and add the new one
      setInput(input.slice(0, -1) + operator)
    }else {
      //else add the operator to the input
      setInput(input + operator)
    }
  }
  //Handle Event dor deleting last character
  const deleteLastCharacter = () => {
    //delete the previous number or operation
    setInput(input.slice(0, -1));
  }



  return (
    <div className='h-screen bg-darkBlue text-white w-[375px]'>
      <div className='flex justify-end'>
      <input className='mr-8 mt-8 text-4xl text-end bg-darkBlue text-white' type='text' value={input} />
      </div>
      
      <div className='mr-8 text-7xl text-end'>
        {(result !== null ? result : '0')}
      </div>

      <div className='grid'>
        <div>
          <button className='bg-ash-100' onClick={() => handleClearButton()}>C</button>
          <button className='bg-ash-100' onClick={() => handleOperatorButton('±')}>±</button>
          <button className='bg-ash-100' onClick={() => handleNumberButton('%')}>%</button>
          <button className='bg-blue' onClick={() => handleOperatorButton('÷')}>÷</button>
        </div>
        
        <div>
          <button className='bg-ash-200' onClick={() => handleNumberButton('7')}>7</button>
          <button className='bg-ash-200' onClick={() => handleNumberButton('8')}>8</button>
          <button className='bg-ash-200' onClick={() => handleNumberButton('9')}>9</button>
          <button className='bg-blue' onClick={() => handleOperatorButton('x')}>x</button>
        </div>
        <div>
          <button className='bg-ash-200' onClick={() => handleNumberButton('4')}>4</button>
          <button className='bg-ash-200' onClick={() => handleNumberButton('5')}>5</button>
          <button className='bg-ash-200' onClick={() => handleNumberButton('6')}>6</button>
          <button className='bg-blue' onClick={() => handleOperatorButton('-')}>-</button>
        </div>
        
        <div>
          <button className='bg-ash-200' onClick={() => handleNumberButton('1')}>1</button>
          <button className='bg-ash-200' onClick={() => handleNumberButton('2')}>2</button>
          <button className='bg-ash-200' onClick={() => handleNumberButton('3')}>3</button>
          <button className='bg-blue' onClick={() => handleOperatorButton('+')}>+</button>
        </div>

        <div>
          <button className='bg-ash-200' onClick={() => handleNumberButton('.')}>.</button>
          <button className='bg-ash-200' onClick={() => handleNumberButton('0')}>0</button>
          <button className='bg-ash-200' onClick={() => deleteLastCharacter()}>3</button>
          <button className='bg-blue' onClick={() => handleOperatorButton('=')}>=</button>
        </div>
        
      </div>
    </div>
  )
}

export default Calculator;