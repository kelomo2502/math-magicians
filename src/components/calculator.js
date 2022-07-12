import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="display">
            <span>0</span>
          </div>
          <div className=" row1">
            <button type="button">AC </button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button className="operator" type="button">÷</button>
          </div>
          <div className="row2">
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button className="operator" type="button">x</button>
          </div>
          <div className="row3">
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button className="operator" type="button">-</button>
          </div>
          <div className="row4">
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button className="operator" type="button">+</button>
          </div>
          <div className="row5">
            <button type="button" className="zero">0</button>
            <button type="button" className="operator">=</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
