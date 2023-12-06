import React from 'react';

const CalculatorButtons = ({enterValue, clear, allClear, evaluate}) => {

  return (
    <>
      <span className="num clear" onClick={() => allClear()}><i>AC</i></span>
      <span className="num clear" onClick={() => clear()}><i>C</i></span>
      <span className="num" onClick={() => enterValue('/')}><i>/</i></span>
      <span className="num" onClick={() => enterValue('*')}><i>*</i></span>
      <span className="num" onClick={() => enterValue('7')}><i>7</i></span>
      <span className="num" onClick={() => enterValue('8')}><i>8</i></span>
      <span className="num" onClick={() => enterValue('9')}><i>9</i></span>
      <span className="num" onClick={() => enterValue('-')}><i>-</i></span>
      <span className="num" onClick={() => enterValue('4')}><i>4</i></span>
      <span className="num" onClick={() => enterValue('5')}><i>5</i></span>
      <span className="num" onClick={() => enterValue('6')}><i>6</i></span>
      <span className="num" onClick={() => enterValue('+')}><i>+</i></span>
      <span className="num" onClick={() => enterValue('1')}><i>1</i></span>
      <span className="num" onClick={() => enterValue('2')}><i>2</i></span>
      <span className="num" onClick={() => enterValue('3')}><i>3</i></span>
      <span className="num" onClick={() => enterValue('0')}><i>0</i></span>
      <span className="num" onClick={() => enterValue('00')}><i>00</i></span>
      <span className="num" onClick={() => enterValue('.')}><i>.</i></span>

      <span className="num equal" onClick={() => evaluate()}>
        <i>=</i>
      </span>
    </>
  );
};

export default CalculatorButtons;
