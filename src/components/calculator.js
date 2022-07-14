import React, { useState } from 'react';

import calculate from '../logic/calculate';

// function here
  return (
    <div className="App">
      <div className="container">
        <div className="display" id="display">
          {result.total}
          {result.operation}
          {result.next}
        </div>
        <div className=" row1">
          <button onClick={clickFunction} type="button" value="AC">AC</button>
          <button onClick={clickFunction} type="button" value="+">+/-</button>
          <button onClick={clickFunction} type="button" value="%">%</button>
          <button className="operator" onClick={clickFunction} type="button" value="÷">÷</button>
        </div>
        <div className="row2">
          <button onClick={clickFunction} type="button" value="7">7</button>
          <button onClick={clickFunction} type="button" value="8">8</button>
          <button onClick={clickFunction} type="button" value="9">9</button>
          <button onClick={clickFunction} className="operator" type="button" value="x">x</button>
        </div>
        <div className="row3">
          <button onClick={clickFunction} type="button" value="4">4</button>
          <button onClick={clickFunction} type="button" value="5">5</button>
          <button onClick={clickFunction} type="button" value="6">6</button>
          <button onClick={clickFunction} className="operator" type="button" value="-">-</button>
        </div>
        <div className="row4">
          <button onClick={clickFunction} type="button" value="1">1</button>
          <button onClick={clickFunction} type="button" value="2">2</button>
          <button onClick={clickFunction} type="button" value="3">3</button>
          <button onClick={clickFunction} className="operator" type="button" value="+">+</button>
        </div>
        <div className="row5">
          <button onClick={clickFunction} type="button" className="zero" value="0">0</button>
          <button onClick={clickFunction} type="button" className="operator" value="=">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
