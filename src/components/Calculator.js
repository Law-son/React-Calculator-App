import React from 'react'
import DisplayScreen from './DisplayScreen'
import CalculatorButtons from './CalculatorButtons'

const Calculator = ({output, enterValue, allClear, clear, evaluate}) => {
  return (
    <form action="" name="calc" className="calculator">
        <DisplayScreen output={output} />
        <CalculatorButtons enterValue={enterValue} allClear={allClear} clear={clear} evaluate={evaluate} />
    </form>
  )
}

export default Calculator
