import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    currentVal: '0',
    prevVal: null,
    waitingForOperator: false,
    operator: null,
    value: 0
  }

  handleChange(num) {
    const { currentVal, waitingForOperator } = this.state
    
    if (waitingForOperator) {
      this.setState({
        currentVal: String(num),
        waitingForOperator: false
    })
    } else {
      this.setState({
      currentVal: currentVal === '0' ? String(num) : currentVal + String(num)
     }) 
    }
    
      
  }



  addDecimal() {
    const { currentVal, waitingForOperator } = this.state;
    if (waitingForOperator) {
      this.setState({
        currentVal: ".",
      waitingForOperator: false})
    } else {
        if (currentVal.indexOf(".") === -1) {
      this.setState({currentVal: currentVal + "."})
    }
    }
  
  }

  reset() {
    this.setState({currentVal: "0"})
  }


 perfornOperation(nextOperator) {

  const { currentVal, operator, value } = this.state;
  const nextValue = parseFloat(currentVal);

  const operations = {
    "/": (prevValue, nextValue) => prevValue / nextValue,
    "*": (prevValue, nextValue) => prevValue * nextValue,
    "+": (prevValue, nextValue) => prevValue + nextValue,
    "-": (prevValue, nextValue) => prevValue - nextValue,
    "=": (prevValue, nextValue) => nextValue,
  }
  if (value == null) {
    this.setState({value: nextValue})
  } else if (operator) {
    const currentValue = value || 0
    const computedValue = operations[operator](currentValue, nextValue)

    this.setState({
      value: computedValue,
      currentVal: String(computedValue)
    })
  }


  this.setState({waitingForOperator: true,
  operator: nextOperator})
 }


  render() {
    return (
      <div className="App">
      <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <div id="calculator">
          <div id="display">
            {this.state.currentVal}
          </div>
          <div id="clear" className="btn" onClick={this.reset.bind(this)}>AC</div>
          <div id="subtract" className="operators btn" onClick={() => this.perfornOperation("/")}>/</div>
          <div id="multiply" className="operators btn" onClick={() => this.perfornOperation("*")}>*</div>
          <div id="one" className="number btn" onClick={() => this.handleChange(1)}>1</div>
          <div id="two" className="number btn" onClick={() => this.handleChange(2)}>2</div>
          <div id="three" className="number btn" onClick={() => this.handleChange(3)}>3</div>
          <div id="divide" className="operators btn" onClick={() => this.perfornOperation("-")}>-</div>
          <div id="four" className="number btn" onClick={() => this.handleChange(4)}>4</div>
          <div id="five" className="number btn" onClick={() => this.handleChange(5)}>5</div>
          <div id="six" className="number btn" onClick={() => this.handleChange(6)}>6</div>
          <div id="add" className="operators btn" onClick={() => this.perfornOperation("+")}>+</div>
          <div id="seven" className="number btn" onClick={() => this.handleChange(7)}>7</div>
          <div id="eight" className="number btn" onClick={() => this.handleChange(8)}>8</div>
          <div id="nine" className="number btn" onClick={() => this.handleChange(9)}>9</div>
          <div id="equals" className="btn" onClick={() => this.perfornOperation("=")}>=</div>
          <div id="zero" className="number btn" onClick={() => this.handleChange(0)}>0</div>
          <div id="decimal" className="btn" onClick={this.addDecimal.bind(this)}>.</div>
        </div>
      </div>
    );
  }
}

export default App;
