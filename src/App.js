import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    currentVal: '0'
  }

  handleChange(num) {
    const { currentVal } = this.state
    
    this.setState({
      currentVal: currentVal === '0' ? String(num) : currentVal + String(num)
    })
    this.handleOperation(num)
    
  }

  handleOperation(num) {
    this.setState({
      operation: this.state.currentVal.toString() + num
    })
  }

  addDecimal() {
    const { currentVal } = this.state
    if (currentVal.indexOf(".") === -1) {
      this.setState({currentVal: currentVal + "."})
    }
  }

  reset() {
    this.setState({currentVal: "0"})
  }


  render() {
    return (
      <div className="App">
        <div id="calculator">
          <div id="display">
            {this.state.currentVal}
          </div>
          <div id="clear" className="btn" onClick={this.reset.bind(this)}>AC</div>
          <div id="subtract" className="operators btn">/</div>
          <div id="multiply" className="operators btn">*</div>
          <div id="one" className="number btn" onClick={() => this.handleChange(1)}>1</div>
          <div id="two" className="number btn" onClick={() => this.handleChange(2)}>2</div>
          <div id="three" className="number btn" onClick={() => this.handleChange(3)}>3</div>
          <div id="divide" className="operators btn">-</div>
          <div id="four" className="number btn" onClick={() => this.handleChange(4)}>4</div>
          <div id="five" className="number btn" onClick={() => this.handleChange(5)}>5</div>
          <div id="six" className="number btn" onClick={() => this.handleChange(6)}>6</div>
          <div id="add" className="operators btn">+</div>
          <div id="seven" className="number btn" onClick={() => this.handleChange(7)}>7</div>
          <div id="eight" className="number btn" onClick={() => this.handleChange(8)}>8</div>
          <div id="nine" className="number btn" onClick={() => this.handleChange(9)}>9</div>
          <div id="equals" className="btn">=</div>
          <div id="zero" className="number btn" onClick={() => this.handleChange(0)}>0</div>
          <div id="decimal" className="btn" onClick={this.addDecimal.bind(this)}>.</div>
        </div>
      </div>
    );
  }
}

export default App;
