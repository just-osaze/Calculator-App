import React, { useState } from 'react';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

const Calculator: React.FC = () => {
 



  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const handleNumberButton = (number: string) => {
    setInput((prevInput) => prevInput + number);
  };

  const handleClearButton = () => {
    setInput('');
    setResult(null);
  };

  const handleOperatorButton = (operator: string) => {
    // Check if an operator exists
    const lastChar = input.charAt(input.length - 1);
    if (lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '/') {
      // If an operator exists, delete it and add the new one
      setInput(input.slice(0, -1) + operator);
    } else {
      // Otherwise, add the operator to the input
      setInput(input + operator);
    }
  };

  const deleteLastCharacter = () => {
    setInput(input.slice(0, -1));
  };

  const handleEqualButton = () => {
    try {
      // Split the input string by operators
      const inputArray = input.split(/([+\-\x÷])/);

      // Initialize variables for result and current operator
      let result = parseFloat(inputArray[0]);
      let currentOperator = '';

      // Iterate through the input array
      for (const item of inputArray.slice(1)) {
        if (['+', '-', 'x', '÷'].includes(item)) {
          // Update the operator if the item is an operator
          currentOperator = item;
        } else {
          // If the item is a number, parse it as a float
          const myNumber = parseFloat(item);

          // Carry out operation based on the current operator
          switch (currentOperator) {
            case '+':
              result += myNumber;
              break;
            case '-':
              result -= myNumber;
              break;
            case 'x':
              result *= myNumber;
              break;
            case '÷':
              if (myNumber !== 0) {
                result /= myNumber;
              } else {
                setResult(null);
                setInput('');
                return;
              }
              break;
            default:
              // Handle invalid operator error
              setResult(null);
              setInput('');
              return;
          }
        }
      }

      // Update the result state with the final calculated result
      setResult(result);
    } catch (error) {
      // Handle errors in the input expression
      setResult(null);
      setInput('');
    }
  };

  const handlePercentageButton = (operator: string) => {
    try {
      const percentNumber = parseFloat(input);

      const result = percentNumber / 100;

      //update the result state
      setResult(result);
    } catch (error) {
      setResult(null)
      setInput('');
    }
  }


  return (
    <div className='h-screen bg-darkBlue text-white m-auto grid place-items-center'>
      <div className='-mt-32 w-[375px]'>
        <div className=' flex'>
          <input className='mt-8 text-4xl bg-darkBlue text-white' type='text' value={input} />
        </div>
        
        <div className='mt-4 text-7xl'>
          {(result !== null ? result : '0')}
        </div>

        <div className='mt-4'>
          <div>
            <button className='bg-ash-100' onClick={() => handleClearButton()}>C</button>
            <button className='bg-ash-100' onClick={() => handleOperatorButton('±')}>±</button>
            <button className='bg-ash-100' onClick={() => handlePercentageButton('%')}>%</button>
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
            <button className='bg-ash-200' onClick={() => deleteLastCharacter()}>
              <BackspaceOutlinedIcon className='flex -mt-3 align-middle'/>
            </button>
            <button className='bg-blue' onClick={() => handleEqualButton()}>=</button>
          </div>
          
        </div>
      </div>
    </div>
      
  )
}

export default Calculator;