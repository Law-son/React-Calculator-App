import React, {useState} from 'react'
import Calculator from './Calculator'

const CalculatorWrapper = () => {
    const [output, setOutput] = useState("")

    const enterValue = (value) => {
        setOutput(prevOutput => prevOutput + value);
      };

    const allClear = () =>{
        setOutput('');
    }

    const clear = () =>{
        setOutput(prevOutput => prevOutput.slice(0, -1));
    }

    const evaluate = () => {
        try {
          // Use eval to evaluate the expression
          const result = eval(output);
          // Check if the result is NaN or Infinity
          if (isNaN(result) || !isFinite(result)) {
            setOutput("Error");
          } else {
            setOutput(result.toString());
          }
        } catch (error) {
          // Handle any evaluation errors
          setOutput("Error");
        }
      };

  return (
    <div className='container'>
      <Calculator output={output} enterValue={enterValue} allClear={allClear} clear={clear} evaluate={evaluate} />
    </div>
  )
}

export default CalculatorWrapper
